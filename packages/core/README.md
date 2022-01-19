Core functional programming functions.

## Functions

- **curry**

```javascript
// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
```

- **compose**

```javascript
// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
```

- **identity**

```javascript
// identity :: x -> x
```

## Curried functions

- **always**

```javascript
// always :: a -> b -> a
```

- **trace**

```javascript
// trace :: String -> a -> a
```

- **map**

```javascript
// map :: (a -> b) -> [a] -> [b]
```

- **filter**

```javascript
// filter :: (a -> Bool) -> [a] -> [a]
```

- **reduce**

```javascript
// reduce :: (b -> a -> b) -> b -> [a] -> b
```
