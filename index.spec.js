
import tap from 'tap';

import { PATHNAME_RE, PATHNAME_RE_GREEDY, replaceOne, replaceAll, compare } from './index';

tap.test('replaceOne should replace one {} group with a regexp', t => {
  t.deepEqual(replaceOne('/foo/{bar}/baz'), [9, 'bar', `/foo/(${PATHNAME_RE})/baz`]);
  t.deepEqual(replaceOne('/foo/{bar}/{baz}'), [9, 'bar', `/foo/(${PATHNAME_RE})/{baz}`]);
  t.deepEqual(replaceOne('/foo/{bar}/{baz+}'), [9, 'bar', `/foo/(${PATHNAME_RE})/{baz+}`]);
  t.end();
});

tap.test('replaceAll should replace all {} groups with regexps', t => {
  t.deepEqual(replaceAll('/foo/{bar}/baz'), [`/foo/(${PATHNAME_RE})/baz`, ['bar']]);
  t.deepEqual(replaceAll('/foo/{bar}/{baz}'), [`/foo/(${PATHNAME_RE})/(${PATHNAME_RE})`, ['bar', 'baz']]);
  t.deepEqual(replaceAll('/foo/{bar}/{baz+}'), [`/foo/(${PATHNAME_RE})/(${PATHNAME_RE_GREEDY})`, ['bar', 'baz+']]);
  t.end();
});

tap.test('compare', t => {
  t.deepEqual(compare('/foo/bar', '/foo/bar'), [[], []]);
  t.deepEqual(compare('/foo/bar', '/foo'), false);
  t.deepEqual(compare('/foo/bar', '/foo/bar/baz'), false);
  t.deepEqual(compare('/foo/{bar}', '/foo/xxx'), [['bar'], ['xxx']]);
  t.deepEqual(compare('/foo/{bar}/baz', '/foo/xxx/baz'), [['bar'], ['xxx']]);
  t.deepEqual(compare('/foo/{bar}/baz', '/foo/xxx/byz'), false);
  t.deepEqual(compare('/foo/{bar}/{baz}', '/foo/xxx/yyy'), [['bar', 'baz'], ['xxx', 'yyy']]);
  t.deepEqual(compare('/foo/{bar+}', '/foo/xxx/yyy'), [['bar+'], ['xxx/yyy']]);
  t.deepEqual(compare('/foo/{abc}/{bar+}', '/foo/123/xxx/yyy'), [['abc', 'bar+'], ['123', 'xxx/yyy']]);
  t.end();
});
