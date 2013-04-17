var fs = require('fs')
var Path = require('path')

module.exports = install

function install(dir) {
  dir = Path.resolve(dir || '.', 'node_modules')

  fs.readdirSync(dir).forEach(function(cmp) {
    var cfg = tryDepJson(dir, cmp)
    var name = cfg && cfg.name
    if (!name || name == cmp) return
    var filename = Path.join(dir, name + '.js')
    fs.writeFileSync(filename, 'module.exports = require("' + cmp + '")')
  })
}

function tryDepJson(dir, name) {
  var p = Path.join(dir, name, 'component.json')
  try {
    return readJson(p)
  } catch(e) {
    if (e.code == 'ENOENT' || e.code == 'ENOTDIR') return null
    throw e
  }
}

function readJson(file) {
  var json = fs.readFileSync(file, 'utf8')
  try {
    return JSON.parse(json)
  } catch(e) {
    throw new Error('Failed to parse ' + file + '\n' + e.message)
  }
}
