function integerDivision(dividend, divisor) {
  if (divisor === 0) {
    throw new Error("Деление на ноль невозможно");
  }

  let sign = 1;

  if (dividend < 0) {
    sign = -1;
    dividend = -dividend;
  }

  if (divisor < 0) {
    sign *= -1;
    divisor = -divisor;
  }

  let quotient = Math.floor(dividend / divisor);

  if (sign < 0 && (dividend % divisor) !== 0) {
    quotient += 1;
  }

  return sign * quotient;
}
console.log(integerDivision(11, 4))