export default function compose(...fns) {
  return function composed(result) {
    fns.reverse().forEach((fn) => {
      result = fn(result);
    });
    return result;
  };
}
