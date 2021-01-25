# @frisby/core

Small set of FP core functions.

## Installing

@frisby/core can be installed through npm or yarn:

```
$ npm install @frisby/core
```

```
$ yarn add @frisby/core
```

## Usage

Import the functions that you want to use from @frisby/core.

```js
    import { compose } from @frisby/core
```

## Documentation

- **compose**

  Partial application that executes functions from right to left.

  ```js
  compose(fn3, fn2, fn1)(value)
  ```

- **pipe**

  Partial application that executes functions from left to right.

  ```js
  compose(fn1, fn2, fn3)(value)
  ```

- **curry**

  Curries a function with arity equivalent to it's arguments length.

  ```js
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
