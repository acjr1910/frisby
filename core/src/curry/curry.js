export default function curry(fn) {
  let args = [];
  return (function nextCurriedFn() {
    return function curried(nextArgs) {
      args = args.concat([nextArgs]);
      if (args.length >= fn.length) return fn(...args);
      return nextCurriedFn();
    };
  })();
}
