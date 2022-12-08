// cli/lib/commands/access.js 

// 1. path, pkg should be black
// semantic: variable.other.constant.object.js, syntax: variable.other.constant.js
const path = require('path')
const pkg = await readPackageJson(path.resolve(this.npm.prefix, 'package.json'))

// 2. npa should be black
// semantic: entity.name.function.js, syntax: variable.other.constant.js
// however function declarations like function foo() also use entity.name.function.js and they are purple
const npa = require('npm-package-arg')

// 3. description should be blue
// semantic: variable.other.property.js, syntax: variable.object.property.js
// need to check usages of static properties and methods
class Foo {
  static description = 'Set access level on published packages'
}

// 4. opts should be black
// semantic: variable.parameter, syntax: variable.parameter.js
class Foo {
  async completion(opts) { }
}

// 5. conf, argv, remain should be blue
// syntax: variable.other.object.property.js, variable.other.property.js
class Foo {
  async completion(opts) {
    const argv = opts.conf.argv.remain
    if (argv.length === 2) {
      return commands
    }
  }
}

// 6. Error should be brown
// semantic: support.class, syntax: entity.name.function.js
function foo() {
  throw new Error(argv[2] + ' not recognized')
}

// 7. Ellipsis should be black
// syntax: keyword.operator.rest.js, keyword.operator.spread.js
class Foo {
  async exec([cmd, subcmd, ...args]) { }
}

function appendOutput(...args) {
  this.output.push(...args.flat())
}

// 8. this, super should be black
// syntax: variable.language.this.js, variable.language.super.js
function foo() {
  super()
  throw this.usageError()
}

// 9. ${} should be black
// syntax: punctuation.definition.template-expression.begin.js, punctuation.definition.template-expression.end.js
function foo(cmd) {
  throw this.usageError(`${cmd} is not a valid access command`)
}

// 10. => should be blue
// syntax: storage.type.function.arrow.js
await otplease(this.npm, this.npm.flatOptions, (opts) => {
  return libnpmaccess.setMfa(pkgName, level, opts)
})

// 11. __proto__, read, write should be blue
// semantic: variable.other.property.js, syntax: meta.object-literal.key.js
const lookup = {
  __proto__: null,
  read: 'read-only',
  write: 'read-write',
}

// 12. module should be black, exports should be blue
// however they both have scope entity.name.type.class which should be brown
class Access { }
module.exports = Access

// cli/lib/commands/audit.js 

// 13. constructor should be purple
// but keywords like "const" or "let" have scope storage.type.js which should be red
class VerifySignatures {
  constructor(tree, filterSet, npm, opts) { }
}

// cli/lib/utils/timers.js

// 14. EE should be blue
// but is has scope entity.name.type.class
const EE = require('events')

// 15. fs should be black
// semantic: entity.name.type.module.js
const fs = require('fs')
const { type } = require('os')

// 16. members should be blue
// syntax: variable.object.property.js
class Foo {
  #unfinished = new Map()
  #finished = {}
  #onTimeEnd = Symbol('onTimeEnd')
  #initialListener = null
  #initialTimer = null
}

// 17. All operators should be blue (except ternary)
let a = 1 + 2 - 3 * 4 ** 5 / 6 % 7;
let b = a-- + a++;
a += b; a -= b; a *= b; a /= b; a %= b; a **= b;
let c = 1 == 2 === 3 != 4 !== 5 > 6 < 7 >= 8 <= 9;
let d = c ? a : b;
let e = a && b || !c;
let f = typeof d === "number" && (a instanceof Foo);
let g = 1 & 2 | 3 ^ ~4 << 5 >> 6 >>> 7;
a ?? b; a ??= b; a?.b; a.foo?.(); a?.[0];

// 18. Standard objects
const standard = [
  globalThis, Infinity, NaN, undefined,
  eval, isFinite, isNaN, parseFloat, parseInt, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, escape, unescape,
  Object, Function, Boolean, Symbol,
  Error, AggregateError, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, InternalError,
  Number, BigInt, Math, Date,
  String, RegExp,
  Array, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array, Float32Array, Float64Array,
  Map, Set, WeakMap, WeakSet,
  ArrayBuffer, SharedArrayBuffer, DataView, Atomics, JSON,
  WeakRef, FinalizationRegistry,
  Promise, GeneratorFunction, AsyncGeneratorFunction, Generator, AsyncGenerator, AsyncFunction,
  Reflect, Proxy,
  Intl, Intl.Collator, Intl.DateTimeFormat, Intl.DisplayNames, Intl.ListFormat, Intl.Locale, Intl.NumberFormat, Intl.PluralRules, Intl.RelativeTimeFormat, Intl.Segmenter,
]

const value = isNaN(parseInt("10")) ? 0 : parseInt("10");

// 19. Regular expressions
const regex = /^abc[a-zA-z_-]\w+\d*.*(foo)?bar{1,10}|x(?=y)x(?!y)(?<=y)x(?<!y)x|(?:x)(?<foo>x)|\\x\(y\)z$/gui;

// 20. Special characters
const specials = ["\tfoo\r\n", `\tfoo\r\n`, '\r', `\n`];
