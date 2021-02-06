# @frisby/types

Functional Programming Data Types.

## Installing

@frisby/types can be installed through npm or yarn:

```
$ npm install @frisby/types
```

```
$ yarn add @frisby/types
```

## Usage

Import the functions that you want to use from @frisby/types.
@frisby/types supports tree-shake.

```javascript
import { compose, map } from @frisby/types
```

## Docs

### Identity

```javascript
// Identity :: a -> Identity a
```

### Maybe

```javascript
// data Maybe a
```

### Either

```javascript
// data Either a b
```

### Task

```javascript
// data Task a
```

### IO

```javascript
// data IO a
```
