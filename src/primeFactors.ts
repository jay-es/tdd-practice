export function primeFactors(n: number) {
  const factors: number[] = [];

  // 2で割り続けた後、3以上の奇数で割り続ける
  for (let i = 2; i <= Math.sqrt(n); i += i > 2 ? 2 : 1) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  // 最後に残った数が素数である場合
  if (!factors.length || n > 2) {
    factors.push(n);
  }

  return factors.join("*");
}
