[![npm version](https://badge.fury.io/js/getver.svg)](https://badge.fury.io/js/getver)
[![Build status](https://travis-ci.org/gswalden/getver.svg?branch=master)](https://travis-ci.org/gswalden/getver)
[![Dependencies](https://david-dm.org/gswalden/getver.svg)](https://david-dm.org/gswalden/getver)

### Install
```sh
npm install --save getver
```

### Use
```js
var getver = require('getver');
getver({
  username: 'gswalden', // GitHub username of package owner
  repo: 'getver' // GitHub repo name of package
}, function(err, version, package) {
  console.log(err); // null or Error
  console.log(version); // string containing version, i.e. "1.0.0"
  console.log(package); // object containing entire package.json
});
```
