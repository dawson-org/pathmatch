# pathmatch

[![npm version](https://badge.fury.io/js/pathmatch.svg)](https://badge.fury.io/js/pathmatch) 
[![Build Status](https://travis-ci.org/dawson-org/pathmatch.svg?branch=master)](https://travis-ci.org/dawson-org/pathmatch) 
[![Coverage Status](https://coveralls.io/repos/github/dawson-org/pathmatch/badge.svg?branch=master)](https://coveralls.io/github/dawson-org/pathmatch?branch=master) 

Compares HTTP paths with API-Gateway style paths, and extracts named parameters

### Usage

```bash
$ npm install --save pathmatch
```

```js
import { compare } from 'pathmatch';
compare('/foo/bar', '/foo/bar') // [[], []]
compare('/foo/bar', '/foo') // false
compare('/foo/bar', '/foo/bar/baz') // false
compare('/foo/{bar}', '/foo/xxx') // [['bar'], ['xxx']]
compare('/foo/{bar}/baz', '/foo/xxx/baz') // [['bar'], ['xxx']]
compare('/foo/{bar}/baz', '/foo/xxx/byz') // false
compare('/foo/{bar}/{baz}', '/foo/xxx/yyy')// [['bar', 'baz'], ['xxx', 'yyy']]
```

### License

Copyright (c) 2016 Simone Lusenti <simone@plasticpanda.com>

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
