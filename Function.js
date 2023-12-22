function pow(x, y) {
  if (y === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= Math.abs(y); i++) {
    result *= x;
  }

  return y < 0 ? 1 / result : result;
}


