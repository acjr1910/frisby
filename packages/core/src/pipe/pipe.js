export default function pipe(...fns) {
  return function piped(result) {
    fns.forEach((fn) => {
      result = fn(result);
    });
    return result;
  };
}
