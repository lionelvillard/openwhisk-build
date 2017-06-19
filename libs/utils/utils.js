/*
 * Copyright 2017 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fs = require('fs')
const archiver = require('archiver')

const makeZip = (targetZip, src) => new Promise((resolve, reject) => {
    const output = fs.createWriteStream(targetZip)
    const archive = archiver('zip', {
        zlib: {level: 9}
    })

    output.on('close', () => {
        resolve()
    })

    archive.on('error', err => {
        reject(err)
    })

    // pipe archive data to the file
    archive.pipe(output)

    // append files from src directory
    archive.directory(src, '.')

    // finalize the archive (ie we are done appending files but streams have to finish yet)
    archive.finalize()
})
exports.zip = makeZip
