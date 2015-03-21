function interval_add(a, b, out) {
  out = out || [0, 0];

  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];

  return out;
}

module.exports = interval_add;
