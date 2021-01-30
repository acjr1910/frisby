# @frisby/core

Core FP functions. All functions are curried.

## Installing

@frisby/core can be installed through npm or yarn:

```
$ npm install @frisby/core
```

```
$ yarn add @frisby/core
```

## Usage

Import only the functions that you want to use from @frisby/core, since it's tree-shakeable.

```javascript
import { compose, map } from @frisby/core
```

## Documentation

### curry

Curries a function with arity equivalent to it's arguments length.

```javascript
const fnToCurry = (arg1, arg2, arg3) => {
  console.log('I have received all my arguments', arg1, arg2, arg3)
}
const curriedFn = curry(fnToCurry)
```

**curriedFn** is now curried with arity of 3;

```js
curriedFn(1, 2)
curriedFn(3) // evaluates to => 'I have received all my arguments 1,2,3'
```

### map, filter, reduce

Curried version of native JavaScript map, filter and reduce array functions.

### compose

Partial application that executes functions from right to left.

```javascript
compose(fn3, fn2, fn1)(value)
```

### trace

Log a value with a provided tag.

```js
trace('mytag', 3) // evaluates to => 'my tag 3'
```
