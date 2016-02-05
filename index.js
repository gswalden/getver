'use strict';

const github = require('github-get');

function getver(opt, cb) {
  validateOpt(opt);
  if (typeof cb !== 'function') {
    throw new Error('getver: Missing callback');
  }

  github(opt.username, opt.repo, 'package.json', opt, (err, data, content) => {
    if (err) return cb(err);

    try {
      var pkg = JSON.parse(content);
    } catch (e) {
      const err = new Error('getver: Unable to parse content into JSON (see "content" property of this error object)');
      err.content = content;
      return cb(err);
    }
    cb(null, pkg.version, pkg);
  });
}

function validateOpt(opt) {
  if (typeof opt !== 'object') {
    throw new Error('getver: First argument must be an object');
  }
  if (typeof opt.username !== 'string') {
    throw new Error('getver: Missing username in options object');
  }
  if (typeof opt.repo !== 'string') {
    throw new Error('getver: Missing repo in options object');
  }
}

module.exports = getver;
