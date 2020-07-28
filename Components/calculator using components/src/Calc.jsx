function Add(x, y) {
  let z = x + y;
  return z;
}
function sub(x, y) {
  let z = x - y;
  return z;
}
function mul(x, y) {
  let z = x * y;
  return z;
}
function div(x, y) {
  let z = x / y;
  z = z.toFixed(2);
  return z;
}

export { Add, sub, mul, div };
