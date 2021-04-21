# @frisby/core

Core functional programming functions.

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
It supports tree-shaking.

```javascript
import { compose, map } from @frisby/core
```

## Docs

### curry

```javascript
// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
```

### compose

```javascript
// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
```

### identity

```javascript
// identity :: x -> x
```

### always - (_curried fn_)

```javascript
// always :: a -> b -> a
```

### trace - (_curried fn_)

```javascript
// trace :: String -> a -> a
```

### map - (_curried fn_)

```javascript
// map :: (a -> b) -> [a] -> [b]
```

### filter - (_curried fn_)

```javascript
// filter :: (a -> Bool) -> [a] -> [a]
```

### reduce - (_curried fn_)

```javascript
// reduce :: (b -> a -> b) -> b -> [a] -> b
```
