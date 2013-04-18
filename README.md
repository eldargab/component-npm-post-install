# component-npm-post-install

Post-install script for `npm(1)` which makes a component to be a valid node module.

It loops through a packages installed in a `node_modules` dir and creates additional
files effectively aliasing short component names with names created by `npm(1)`.

__Please note!__ Post install scripts are considered to be a bad practice. In
this concrete case there should not be any practical downside.
Nevertheless it is a break for convention. For example, some tool
might be confused. So, please, you use this script only for private needs or
as a temporary hack.

## Usage

Just create a `package.json` for the component you want to publish and specify
`component-npm-post-install` as a post install script.

```json
{
  "name": "foo",
  "dependencies": {
    "bar": "*",
    "org-baz": "*",
    "org-qux": "org/url-of-foo-on-github",
    "quux-very-strange-npm-suffix-to-avoid-ns-clash": "*",
    "component-npm-post-install": "*"
  },
  "scripts": {
    "postinstall": "component-npm-post-install"
  }
}
```

As a result you will have addional `baz.js`, `qux.js`, `quux.js` files in `node_modules`.
They have a form of:

baz.js

```javascript
module.exports = require("org-baz")
```

For this to work every npm package must include `component.json`.

## Installation

with npm

```
npm install component-npm-post-install
```

## Related

Another way to consume components from node is to
[require](https://github.com/eldargab/component-as-module) them.

## License

MIT
