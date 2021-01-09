export default function prop(x, obj) {
  if (!obj) return undefined;
  return obj[x];
}
