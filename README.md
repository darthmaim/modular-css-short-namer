# modular-css-short-namer

[![version][npm-badge]][npm]
[![license][license-badge]](LICENSE)
[![Travis][travis-badge]][travis]
[![Coverage][coverage-badge]][coverage]

[npm-badge]: https://img.shields.io/npm/v/modular-css-short-namer.svg?style=flat-square
[license-badge]: https://img.shields.io/github/license/darthmaim/modular-css-short-namer.svg?style=flat-square
[travis-badge]: https://img.shields.io/travis/darthmaim/modular-css-short-namer.svg?style=flat-square
[coverage-badge]: https://img.shields.io/codecov/c/github/darthmaim/modular-css-short-namer.svg?style=flat-square
[npm]: https://www.npmjs.com/package/modular-css-short-namer
[travis]: https://travis-ci.org/darthmaim/modular-css-short-namer
[coverage]: https://codecov.io/github/darthmaim/modular-css-short-namer

Helper function to make tiny classnames for modular-css. Creates shorter names than [modular-css-namer](https://github.com/tivac/modular-css/tree/master/packages/namer).

Inspired by [chielkunkels](https://github.com/chielkunkels). Tries to generate strings that start with the same substring to help gzip compression.

## Installation

```
npm install --save modular-css-short-namer
```

## Usage
### JS API

```js
var Processor = require("modular-css-core"),
    processor = new Processor({
        namer : require("modular-css-short-namer")()
    });
    
// ...
```

### Browserify

```js
build.plugin("modular-cssify", {
    css   : "./style.css",
    namer : require("modular-css-short-namer")()
});

// ...
```

### Rollup

```js
rollup({
    entry   : "./index.js",
    plugins : [
        require("modular-css-rollup")({
            css   : "./gen/index.css",
            namer : require("modular-css-short-namer")()
        })
    ]
});
```

## License

**modular-css-short-namer** is licensed under the [MIT License](LICENSE).
