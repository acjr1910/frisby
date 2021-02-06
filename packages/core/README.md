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
@frisby/core supports tree-shake.

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

### always

```javascript
// always :: a -> b -> a
```

### identity

```javascript
// identity :: x -> x
```

### trace

```javascript
// trace :: String -> a -> a
```

### map

```javascript
// map :: (a -> b) -> [a] -> [b]
```

### filter

```javascript
// filter :: (a -> Bool) -> [a] -> [a]
```

### reduce

```javascript
// reduce :: (b -> a -> b) -> b -> [a] -> b
```
