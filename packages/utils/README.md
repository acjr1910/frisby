# @frisby/utils

Set of utility functions.

## Installing

@frisby/utils can be installed through npm or yarn:

```
$ npm install @frisby/utils
```

```
$ yarn add @frisby/utils
```

## Usage

Import the functions that you want to use from @frisby/utils.

```js
    import { reduceObj } from @frisby/utils
```

## Documentation

- **inc**

  Returns an incremented number by one.

  ```js
  inc(2)
  // evaluates to => 3
  ```

- **omit**

  Returns an object without a given prop name. Same functionality of Ramda's omit.

  ```js
  const user = {
    points: {
      benefits: 30,
    },
    name: 'John',
  }
  omit(user, 'points')
  // evaluates to => {  name: 'John' }
  ```

- **pathOr**

  Returns a object prop path or a fallback value.

  ```js
  const obj = {
    username: 'Linus',
    address: {
      billing: {
        default: 'Street 1, 1245',
      },
    },
  }
  pathOr('Street', ['address', 'billing', 'default'], obj)
  // evaluates to => Street 1, 1245

  pathOr('Has no secondary billing', ['address', 'billing', 'secondary'], obj)
  // evaluates to => Has no secondary billing
  ```

- **reduceObj**

  Given a reducer function, an initial value and an object, reduces an object.

  ```js
  const obj = {
    firstName: {
      isActive: true,
      value: 'first',
    },
    lastName: {
      isActive: true,
      value: 'last',
    },
    address: {
      isActive: false,
      street: 'street',
      number: 1,
    },
  }

  reduceObj(
    (acc, curr) => {
      if (curr.isActive) return { ...acc, [curr.value]: curr }
      return acc
    },
    {},
    objToReduce
  )
  // evaluates to => { first: { isActive: true, value: 'first' } last: { isActive: true, value: 'last' } }
  ```
