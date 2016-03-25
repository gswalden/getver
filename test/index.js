'use strict';

const chai = require('chai')
  , getver = require('../')
  ;

chai.should();

describe('getver tests', () => {
  it('should work with a valid repo', done => {
    getver({
      username: 'gswalden',
      repo: 'listver',
      headers: {
        'User-Agent': 'getver-package'
      }
    }, (err, ver, pkg) => {
      if (err) return done(err);
      ver.should.match(/^\d+\.\d+\.\d+$/);
      pkg.should.be.an('object').that.contains.all.keys(['name', 'version']);
      done();
    });
  });

  it('should return error with an invalid repo', done => {
    getver({
      username: 'gswalden',
      repo: 'is-dead'
    }, (err, ver, pkg) => {
      err.should.be.ok;
      done();
    });
  });

  it('should throw on invalid options object', done => {
    () => {
      getver('string', (err, ver, pkg) => {
      });
    }.should.throw;
    done();
  });

  it('should throw on missing options.username', done => {
    () => {
      getver({}, (err, ver, pkg) => {
      });
    }.should.throw;
    done();
  });

  it('should throw on missing options.repo', done => {
    () => {
      getver({}, (err, ver, pkg) => {
      });
    }.should.throw;
    done();
  });

  it('should throw on missing callback', done => {
    () => {
      getver({
        username: 'gswalden',
        repo: 'listver'
      });
    }.should.throw;
    done();
  });
})
