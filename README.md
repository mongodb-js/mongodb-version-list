# mongodb-version-list [![][npm_img]][npm_url] [![][travis_img]][travis_url] [![][coverage_img]][coverage_url]

> Get a list of all MongoDB version strings.

## Background

The list of available releases of MongoDB Server is currently only available as an HTML file published to http://dl.mongodb.org/dl/src/. 
Instead of writing yet another random script, I made a module that fetches the HTML, cleans it, and parses it into nice, semver compliant version strings. The remote HTML is also cached locally for ~24 hours. 

## Related

- [mongodb-download-url](https://github.com/mongodb-js/download-url) Get the URL to download just about any permutation of MongoDB Server release assets.
- [mongodb-version-manager](https://github.com/mongodb-js/version-manager) Manage multiple versions of MongoDB on a single macOS, Windows, or Linux machine.
- [mongodb-runner](https://github.com/mongodb-js/runner) Easily install and run MongoDB Server to test your code against any version, in any configuration, on any platform.
- [kill-mongodb](https://github.com/mongodb-js/kill-mongodb) Kill any currently running MongoDB instances on your machine.
- [is-mongodb-running](https://github.com/mongodb-js/is-mongodb-running) Is MongoDB running on your machine and if so, on what port(s)?
- [get-mongodb-version](https://github.com/mongodb-js/get-mongodb-version) Get the current version of MongoDB Server running on your machine, remotely via a `mongodb://` connection string, or using an active node.js driver connection.

## Installation

```bash
npm install -g mongodb-version-list
```

## Usage

```javascript
const getMongoDBVersionList = require('mongodb-version-list');
getMongoDBVersionList(function(err, versions) {
  if (err) return console.error(err);
  console.log(`There are currently ${versions.length} versions of MongoDB Server available:`);
  console.log(versions);
});
```

## CLI

```
Usage: mongodb-version-list

Get a list of available MongoDB versions.

Usage:
  mongodb-version-list

Options:
  --debug              Enable debug messages.
  -h --help            Show this screen.
  --version            Show version.
```

Running `mongodb-version-list` outputs a JSON array of all available versions of MongoDB Server, which at the current time of writing are:

```json
[
  "3.5.8",
  "3.5.7",
  "3.5.6",
  "3.5.5",
  "3.5.4",
  "3.5.3",
  "3.5.2",
  "3.5.1",
  "3.4.5-rc2",
  "3.4.5-rc1",
  "3.4.5-rc0",
  "3.4.4",
  "3.4.4-rc0",
  "3.4.3",
  "3.4.3-rc2",
  "3.4.3-rc1",
  "3.4.2",
  "3.4.2-rc0",
  "3.4.1",
  "3.4.1-rc0",
  "3.4.0",
  "3.4.0-rc5",
  "3.4.0-rc4",
  "3.4.0-rc3",
  "3.4.0-rc2",
  "3.4.0-rc1",
  "3.4.0-rc0",
  "3.3.15",
  "3.3.14",
  "3.3.13",
  "3.3.12",
  "3.3.11",
  "3.3.10",
  "3.3.9",
  "3.3.8",
  "3.3.7",
  "3.3.6",
  "3.3.5",
  "3.3.4",
  "3.3.3",
  "3.3.2",
  "3.3.1",
  "3.3.0",
  "3.2.14-rc0",
  "3.2.13",
  "3.2.13-rc0",
  "3.2.12",
  "3.2.12-rc0",
  "3.2.11",
  "3.2.11-rc1",
  "3.2.11-rc0",
  "3.2.10",
  "3.2.10-rc2",
  "3.2.10-rc1",
  "3.2.10-rc0",
  "3.2.9",
  "3.2.9-rc1",
  "3.2.9-rc0",
  "3.2.8",
  "3.2.8-rc1",
  "3.2.8-rc0",
  "3.2.7",
  "3.2.7-rc1",
  "3.2.7-rc0",
  "3.2.6",
  "3.2.6-rc0",
  "3.2.5",
  "3.2.5-rc1",
  "3.2.5-rc0",
  "3.2.4",
  "3.2.4-rc0",
  "3.2.3",
  "3.2.2",
  "3.2.2-rc2",
  "3.2.2-rc1",
  "3.2.2-rc0",
  "3.2.1",
  "3.2.1-rc3",
  "3.2.1-rc2",
  "3.2.1-rc1",
  "3.2.1-rc0",
  "3.2.0",
  "3.2.0-rc6",
  "3.2.0-rc5",
  "3.2.0-rc4",
  "3.2.0-rc3",
  "3.2.0-rc2",
  "3.2.0-rc1",
  "3.2.0-rc0",
  "3.1.9",
  "3.1.8",
  "3.1.7",
  "3.1.6",
  "3.1.5",
  "3.1.4",
  "3.1.3",
  "3.1.2",
  "3.1.1",
  "3.1.0",
  "3.0.15",
  "3.0.15-rc0",
  "3.0.14",
  "3.0.13",
  "3.0.13-rc0",
  "3.0.12",
  "3.0.12-rc0",
  "3.0.11",
  "3.0.10",
  "3.0.10-rc1",
  "3.0.10-rc0",
  "3.0.9",
  "3.0.9-rc0",
  "3.0.8",
  "3.0.8-rc0",
  "3.0.7",
  "3.0.7-rc0",
  "3.0.6",
  "3.0.6-rc2",
  "3.0.6-rc1",
  "3.0.6-rc0",
  "3.0.5",
  "3.0.5-rc2",
  "3.0.5-rc1",
  "3.0.5-rc0",
  "3.0.4",
  "3.0.4-rc0",
  "3.0.3",
  "3.0.3-rc2",
  "3.0.3-rc1",
  "3.0.3-rc0",
  "3.0.2",
  "3.0.2-rc0",
  "3.0.1",
  "3.0.1-rc0",
  "3.0.0",
  "3.0.0-rc9",
  "3.0.0-rc8",
  "3.0.0-rc7",
  "3.0.0-rc6",
  "3.0.0-rc11",
  "3.0.0-rc10",
  "2.8.0-rc5",
  "2.8.0-rc4",
  "2.8.0-rc3",
  "2.8.0-rc2",
  "2.8.0-rc1",
  "2.8.0-rc0",
  "2.7.8",
  "2.7.7",
  "2.7.6",
  "2.7.5",
  "2.7.4",
  "2.7.3",
  "2.7.2",
  "2.7.1",
  "2.7.0",
  "2.6.12",
  "2.6.12-rc0",
  "2.6.11",
  "2.6.11-rc0",
  "2.6.10",
  "2.6.10-rc0",
  "2.6.9",
  "2.6.9-rc0",
  "2.6.8",
  "2.6.8-rc0",
  "2.6.7",
  "2.6.7-rc0",
  "2.6.6",
  "2.6.6-rc0",
  "2.6.5",
  "2.6.5-rc4",
  "2.6.5-rc3",
  "2.6.5-rc2",
  "2.6.5-rc1",
  "2.6.5-rc0",
  "2.6.4",
  "2.6.4-rc1",
  "2.6.3",
  "2.6.2",
  "2.6.2-rc1",
  "2.6.2-rc0",
  "2.6.1",
  "2.6.1-rc1",
  "2.6.1-rc0",
  "2.6.0",
  "2.6.0-rc3",
  "2.6.0-rc2",
  "2.6.0-rc1",
  "2.6.0-rc0",
  "2.5.5",
  "2.5.4",
  "2.5.3",
  "2.5.2",
  "2.5.1",
  "2.5.0",
  "2.4.14",
  "2.4.14-rc0",
  "2.4.13",
  "2.4.13-rc0",
  "2.4.12",
  "2.4.12-rc0",
  "2.4.11",
  "2.4.11-rc0",
  "2.4.10",
  "2.4.10-rc0",
  "2.4.9",
  "2.4.9-rc0",
  "2.4.8",
  "2.4.7",
  "2.4.7-rc0",
  "2.4.6",
  "2.4.6-rc1",
  "2.4.6-rc0",
  "2.4.5",
  "2.4.5-rc0",
  "2.4.4",
  "2.4.4-rc0",
  "2.4.3",
  "2.4.3-rc0",
  "2.4.2",
  "2.4.2-rc0",
  "2.4.1",
  "2.4.0",
  "2.4.0-rc3",
  "2.4.0-rc2",
  "2.4.0-rc1",
  "2.4.0-rc0",
  "2.3.2",
  "2.3.1",
  "2.3.0",
  "2.2.7",
  "2.2.7-rc0",
  "2.2.6",
  "2.2.6-rc0",
  "2.2.5",
  "2.2.5-rc0",
  "2.2.4",
  "2.2.4-rc0",
  "2.2.3",
  "2.2.3-rc1",
  "2.2.3-rc0",
  "2.2.2",
  "2.2.2-rc1",
  "2.2.2-rc0",
  "2.2.1",
  "2.2.1-rc1",
  "2.2.1-rc0"
]
```

## License

Apache 2.0

[travis_img]: https://secure.travis-ci.org/mongodb-js/mongodb-version-list.svg?branch=master
[travis_url]: https://travis-ci.org/mongodb-js/mongodb-version-list
[npm_img]: https://img.shields.io/npm/v/mongodb-version-list.svg
[npm_url]: https://www.npmjs.org/package/mongodb-version-list
[coverage_img]: https://coveralls.io/repos/mongodb-js/mongodb-version-list/badge.svg?branch=master
[coverage_url]: https://coveralls.io/r/mongodb-js/mongodb-version-list
