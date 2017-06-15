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
const request = require('request-promise')

/*
  Receive github event

  @param {object} args
  @param {string} args.github_token - Github authentication token
*/
exports.main = (args) => {
    if (args.hasOwnProperty('after')) {
        return handlePush(args)
    }

    return Promise.resolve({built: false})
}

const handlePush = (args) => {
    // TODO: handle multiple kind of builder
    // For instance: bash builder, docker builder?
    // per actions builder, or global builder

    return Promise.resolve({built: true})
    // return createRelease(arg)
    //     .then(build(args))
}


const createRelease = (args) => {
    let auth = args.github_token
    let owner = args.repository.owner.name
    let repo = args.repository.name
    let sha = args.after

    return request({
        method: 'POST',
        uri: `https://api.github.com/repos/${owner}/${repo}/releases`,
        body: {
            tag_name: `build-${sha}`,
            //tag_name: `v0.0.1`
            target_commitish: sha
        },
        json: true,
        headers: {
            'User-Agent': 'Apache OpenWhisk Deploy',
            Authorization: auth
        }
    }).catch(e => {
        // Ignore if release already exists.
        console.log(e)
        return Promise.resolve(true)
    })
}

// Fetch file content in repo (not release asset).
const fetchContent = (owner, repo, sha, location) => {
    return request({
        uri: `https://raw.githubusercontent.com/${owner}/${repo}/${sha}/${location}`
    }).then(result => {
        console.log(`fetched ${location}`)
        return result
    })
}

const build = (args) => {
    let auth = args.github_token
    let owner = args.repository.owner.name
    let repo = args.repository.name
    let sha = args.after


}
