const request = require('request-promise');
const webhook = require('../');
const sampleEvent = {
    "repository": {
        "tags_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/tags",
        "statuses_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/statuses/{sha}",
        "has_downloads": true,
        "blobs_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/git/blobs{/sha}",
        "git_refs_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/git/refs{/sha}",
        "issue_events_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/issues/events{/number}",
        "name": "openwhisk-data-processing-cloudant",
        "has_issues": false,
        "watchers_count": 0,
        "forks": 0,
        "private": false,
        "size": 593,
        "open_issues_count": 0,
        "open_issues": 0,
        "subscribers_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/subscribers",
        "stargazers_count": 0,
        "url": "https://github.com/lionelvillard/openwhisk-data-processing-cloudant",
        "full_name": "lionelvillard/openwhisk-data-processing-cloudant",
        "releases_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/releases{/id}",
        "description": "Create a serverless, event-driven application with OpenWhisk that executes code in response to database changes from Apache CouchDB or IBM Cloudant.",
        "trees_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/git/trees{/sha}",
        "branches_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/branches{/branch}",
        "pushed_at": 1496166748,
        "git_url": "git://github.com/lionelvillard/openwhisk-data-processing-cloudant.git",
        "collaborators_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/collaborators{/collaborator}",
        "mirror_url": null,
        "subscription_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/subscription",
        "languages_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/languages",
        "has_wiki": true,
        "commits_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/commits{/sha}",
        "contents_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/contents/{+path}",
        "fork": true,
        "git_tags_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/git/tags{/sha}",
        "downloads_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/downloads",
        "svn_url": "https://github.com/lionelvillard/openwhisk-data-processing-cloudant",
        "milestones_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/milestones{/number}",
        "id": 91732719,
        "language": "JavaScript",
        "compare_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/compare/{base}...{head}",
        "notifications_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/notifications{?since,all,participating}",
        "comments_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/comments{/number}",
        "pulls_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/pulls{/number}",
        "has_projects": true,
        "teams_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/teams",
        "forks_count": 0,
        "merges_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/merges",
        "stargazers": 0,
        "keys_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/keys{/key_id}",
        "deployments_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/deployments",
        "master_branch": "master",
        "homepage": "https://developer.ibm.com/code/journey/respond-database-changes/",
        "contributors_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/contributors",
        "forks_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/forks",
        "clone_url": "https://github.com/lionelvillard/openwhisk-data-processing-cloudant.git",
        "created_at": 1495137575,
        "hooks_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/hooks",
        "ssh_url": "git@github.com:lionelvillard/openwhisk-data-processing-cloudant.git",
        "owner": {
            "name": "lionelvillard",
            "gists_url": "https://api.github.com/users/lionelvillard/gists{/gist_id}",
            "organizations_url": "https://api.github.com/users/lionelvillard/orgs",
            "gravatar_id": "",
            "email": "villard@us.ibm.com",
            "url": "https://api.github.com/users/lionelvillard",
            "repos_url": "https://api.github.com/users/lionelvillard/repos",
            "received_events_url": "https://api.github.com/users/lionelvillard/received_events",
            "id": 6598801,
            "following_url": "https://api.github.com/users/lionelvillard/following{/other_user}",
            "site_admin": false,
            "subscriptions_url": "https://api.github.com/users/lionelvillard/subscriptions",
            "starred_url": "https://api.github.com/users/lionelvillard/starred{/owner}{/repo}",
            "html_url": "https://github.com/lionelvillard",
            "login": "lionelvillard",
            "type": "User",
            "events_url": "https://api.github.com/users/lionelvillard/events{/privacy}",
            "avatar_url": "https://avatars2.githubusercontent.com/u/6598801?v=3",
            "followers_url": "https://api.github.com/users/lionelvillard/followers"
        },
        "html_url": "https://github.com/lionelvillard/openwhisk-data-processing-cloudant",
        "archive_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/{archive_format}{/ref}",
        "default_branch": "master",
        "updated_at": "2017-05-19T20:09:56Z",
        "issues_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/issues{/number}",
        "assignees_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/assignees{/user}",
        "events_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/events",
        "watchers": 0,
        "issue_comment_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/issues/comments{/number}",
        "labels_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/labels{/name}",
        "has_pages": false,
        "git_commits_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/git/commits{/sha}",
        "stargazers_url": "https://api.github.com/repos/lionelvillard/openwhisk-data-processing-cloudant/stargazers"
    },
    "before": "2cf4215e40a6ffe72faea2ca79893c1a95822a16",
    "pusher": {
        "name": "lionelvillard",
        "email": "villard@us.ibm.com"
    },
    "ref": "refs/heads/master",
    "commits": [
        {
            "author": {
                "name": "Lionel Villard",
                "email": "villard@us.ibm.com",
                "username": "lionelvillard"
            },
            "timestamp": "2017-05-30T13:51:54-04:00",
            "url": "https://github.com/lionelvillard/openwhisk-data-processing-cloudant/commit/faf1799ca8802f990a3b80e56c1106665523ec1c",
            "tree_id": "66a6c74195f682c87051362719291eebce80e792",
            "removed": [
                "actions2/write-to-cloudant.js"
            ],
            "modified": [
                ".gitignore",
                ".travis.yml"
            ],
            "added": [
                ".owbuild.yaml"
            ],
            "id": "faf1799ca8802f990a3b80e56c1106665523ec1c",
            "distinct": true,
            "message": "Add experimental openwhisk builder config file",
            "committer": {
                "name": "Lionel Villard",
                "email": "villard@us.ibm.com",
                "username": "lionelvillard"
            }
        }
    ],
    "after": "faf1799ca8802f990a3b80e56c1106665523ec1c",
    "base_ref": null,
    "forced": false,
    "sender": {
        "gists_url": "https://api.github.com/users/lionelvillard/gists{/gist_id}",
        "organizations_url": "https://api.github.com/users/lionelvillard/orgs",
        "gravatar_id": "",
        "url": "https://api.github.com/users/lionelvillard",
        "repos_url": "https://api.github.com/users/lionelvillard/repos",
        "received_events_url": "https://api.github.com/users/lionelvillard/received_events",
        "id": 6598801,
        "following_url": "https://api.github.com/users/lionelvillard/following{/other_user}",
        "site_admin": false,
        "subscriptions_url": "https://api.github.com/users/lionelvillard/subscriptions",
        "starred_url": "https://api.github.com/users/lionelvillard/starred{/owner}{/repo}",
        "html_url": "https://github.com/lionelvillard",
        "login": "lionelvillard",
        "type": "User",
        "events_url": "https://api.github.com/users/lionelvillard/events{/privacy}",
        "avatar_url": "https://avatars2.githubusercontent.com/u/6598801?v=3",
        "followers_url": "https://api.github.com/users/lionelvillard/followers"
    },
    "head_commit": {
        "author": {
            "name": "Lionel Villard",
            "email": "villard@us.ibm.com",
            "username": "lionelvillard"
        },
        "timestamp": "2017-05-30T13:51:54-04:00",
        "url": "https://github.com/lionelvillard/openwhisk-data-processing-cloudant/commit/faf1799ca8802f990a3b80e56c1106665523ec1c",
        "tree_id": "66a6c74195f682c87051362719291eebce80e792",
        "removed": [
            "actions2/write-to-cloudant.js"
        ],
        "modified": [
            ".gitignore",
            ".travis.yml"
        ],
        "added": [
            ".owbuild.yaml"
        ],
        "id": "faf1799ca8802f990a3b80e56c1106665523ec1c",
        "distinct": true,
        "message": "Add experimental openwhisk builder config file",
        "committer": {
            "name": "Lionel Villard",
            "email": "villard@us.ibm.com",
            "username": "lionelvillard"
        }
    },
    "compare": "https://github.com/lionelvillard/openwhisk-data-processing-cloudant/compare/2cf4215e40a6...faf1799ca880",
    "deleted": false,
    "created": false
}

function main() {
    let event = sampleEvent;
    event.github_auth = 'bearer d31679ecfce9c5de2aa5ae9172fde539f41b4489';

    return webhook.main(event);
}

main().then(r => {
    console.log(r);
}).catch(e => {
    console.log(e);
});


