var Path = require('path')
var assert = require('assert')
var install = require('..')

install(Path.join(__dirname, 'fixtures/component'))
assert.equal(require('./fixtures/component'), 'foo bar baz')
console.log('tests Ok')
