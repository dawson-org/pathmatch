
export const PATHNAME_RE = '[^?#/]+'; // https://tools.ietf.org/html/rfc3986#section-3.3
export const PATHNAME_RE_GREEDY = '[^?#]+'; // greedy paths (+) match slashes too

export function replaceOne (haystack, fromIndex = 0) {
  let startIndex = haystack.indexOf('{', fromIndex);
  if (startIndex === -1) {
    return [-1];
  }
  let endIndex = haystack.indexOf('}', startIndex);
  let name = haystack.substring(startIndex + 1, endIndex);
  let re;
  if (name.indexOf('+') !== -1) {
    // matches full path until the end of the string
    re = PATHNAME_RE_GREEDY;
  } else {
    re = PATHNAME_RE;
  }
  return [
    endIndex,
    name,
    `${haystack.substring(0, startIndex)}(${re})${haystack.substring(endIndex + 1)}`
  ];
}

export function replaceAll (haystack) {
  let lastIndex = 0;
  let token = '' + haystack;
  const names = [];
  while (true) {
    const [index, name, nextToken] = replaceOne(token, lastIndex);
    if (index === -1) {
      break;
    }
    names.push(name);
    lastIndex = index;
    token = nextToken;
  }
  return [token, names];
}

export function compare (defPathname, pathname) {
  if (pathname === defPathname) {
    return [[], []];
  }
  const [reString, partNames] = replaceAll(defPathname);
  const re = new RegExp('^' + reString + '$');
  const matches = re.exec(pathname);
  if (matches === null) {
    return false;
  }
  return [partNames, matches.slice(1)];
}
