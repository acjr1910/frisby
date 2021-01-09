export function Right(x) {
  return {
    chain: (fn) => fn(x),
    map: (fn) => Right(fn(x)),
    fold: (l, r) => r(x),
    inspect: () => console.log(`Right(${x})`),
  };
}

export function Left(x) {
  return {
    chain: (fn) => Left(x),
    map: (fn) => Left(x),
    fold: (l, r) => l(x),
    inspect: () => console.log(`Left(${x})`),
  };
}

export function fromNullable(x) {
  return x != null ? Right(x) : Left(null);
}

export default {
  Left,
  Right,
  fromNullable,
};
