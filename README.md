# ember-shallow-equal

[![Travis][ci-img]][ci-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## Installation

```bash
ember install ember-shallow-equal
```

## Usage

```js
import shallowEqual from 'shallow-equal';
```

The original implementation was taken from [react-redux](https://github.com/reactjs/react-redux)

JSPerf: https://jsperf.com/deepvshallowcompare/1

![benchmark](https://user-images.githubusercontent.com/147411/29122412-ddb89348-7cd7-11e7-8d56-1d8d94ac0fda.png)

[ci-img]: https://img.shields.io/travis/toranb/ember-shallow-equal.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/toranb/ember-shallow-equal
[ember-img]: https://img.shields.io/badge/ember-1.13.13+-green.svg "Ember 1.13.13+"
[npm-img]: https://img.shields.io/npm/v/ember-shallow-equal.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-shallow-equal
