var getList = require('../');
var assert = require('assert');

describe('mongodb-version-list', function() {
  it('should work', function(done) {
    getList(function(err, versions) {
      if (err) return done(err);
      assert(versions.length);
      console.log(JSON.stringify(versions));
      done();
    });
  });
});
