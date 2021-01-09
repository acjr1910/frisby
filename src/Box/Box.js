export default function Box(x) {
  return {
    map: (fn) => Box(fn(x)),
    fold: (fn) => fn(x),
    inspect: () => console.log(`Box(${x})`),
  };
}
