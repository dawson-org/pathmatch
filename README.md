# @dawson/pathmatch

[![npm version](https://badge.fury.io/js/%40dawson%2Fpathmatch.svg)](https://badge.fury.io/js/%40dawson%2Fpathmatch) 
[![Build Status](https://travis-ci.org/dawson-org/pathmatch.svg?branch=master)](https://travis-ci.org/dawson-org/pathmatch) 
[![Coverage Status](https://coveralls.io/repos/github/dawson-org/pathmatch/badge.svg?branch=master)](https://coveralls.io/github/dawson-org/pathmatch?branch=master) 
[![devDependencies Status](https://david-dm.org/dawson-org/pathmatch/dev-status.svg)](https://david-dm.org/dawson-org/pathmatch?type=dev)  

Compares HTTP paths with API-Gateway style paths, and extracts named parameters

### Usage

```bash
$ npm install --save @dawson/pathmatch
```

```js
import { compare } from '@dawson/pathmatch';
compare('/foo/bar', '/foo/bar') // [[], []]
compare('/foo/bar', '/foo') // false
compare('/foo/bar', '/foo/bar/baz') // false
compare('/foo/{bar}', '/foo/xxx') // [['bar'], ['xxx']]
compare('/foo/{bar}/baz', '/foo/xxx/baz') // [['bar'], ['xxx']]
compare('/foo/{bar}/baz', '/foo/xxx/byz') // false
compare('/foo/{bar}/{baz}', '/foo/xxx/yyy') // [['bar', 'baz'], ['xxx', 'yyy']]
compare('/foo/{bar+}', '/foo/xxx/yyy') // [['bar+'], ['xxx/yyy']]
```

### License

Copyright (c) 2016 Simone Lusenti <lusenti.s@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
