'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isMp3 = require('./index');

function check(filename) {
	return isMp3(readChunk.sync(filename, 0, 3));
}

it("should detect mp3 from Buffer", function () {
	assert(check('fixture.mp3'));
	assert(!check('fixture.nmp3'));
});
