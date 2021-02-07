import { identity } from '@frisby/core;'

class Either {
  constructor(x) {
    this.$value = x
  }

  // ----- Pointed (Either a)
  static of(x) {
    return new Right(x)
  }
}

export class Left extends Either {
  get isLeft() {
    return true
  }

  get isRight() {
    return false
  }

  static of(x) {
    throw new Error(
      '`of` called on class Left (value) instead of Either (type)'
    )
  }

  // [util.inspect.custom]() {
  //   return `Left(${inspect(this.$value)})`;
  // }

  // ----- Functor (Either a)
  map() {
    return this
  }

  // ----- Applicative (Either a)
  ap() {
    return this
  }

  // ----- Monad (Either a)
  chain() {
    return this
  }

  join() {
    return this
  }

  // ----- Traversable (Either a)
  sequence(of) {
    return of(this)
  }

  traverse(of, fn) {
    return of(this)
  }
}

export class Right extends Either {
  get isLeft() {
    return false
  }

  get isRight() {
    return true
  }

  static of(x) {
    throw new Error(
      '`of` called on class Right (value) instead of Either (type)'
    )
  }

  // [util.inspect.custom]() {
  //   return `Right(${inspect(this.$value)})`;
  // }

  // ----- Functor (Either a)
  map(fn) {
    return Either.of(fn(this.$value))
  }

  // ----- Applicative (Either a)
  ap(f) {
    return f.map(this.$value)
  }

  // ----- Monad (Either a)
  chain(fn) {
    return fn(this.$value)
  }

  join() {
    return this.$value
  }

  // ----- Traversable (Either a)
  sequence(of) {
    return this.traverse(of, identity)
  }

  traverse(of, fn) {
    fn(this.$value).map(Either.of)
  }
}

export default Either
