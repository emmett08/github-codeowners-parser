export const lcsLength = (s1: string, s2: string) => {
  const s1Length = s1.length;
  const s2Length = s2.length;

  const c = Array.from({ length: 2 }, () => Array(s2Length + 1).fill(0));

  for (let i = 1; i <= s1Length; i++) {
    for (let j = 1; j <= s2Length; j++) {
      c[i % 2][j] =
        s1[i - 1] === s2[j - 1]
          ? c[(i - 1) % 2][j - 1] + 1
          : Math.max(c[i % 2][j - 1], c[(i - 1) % 2][j]);
    }
  }

  return c[s1Length % 2][s2Length];
};

export const metriclcs = (s1: string, s2: string) => {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return NaN;
  if (s1 === s2) return 1;

  const mlen = Math.max(s1.length, s2.length);
  if (mlen === 0) return 1;

  return lcsLength(s1, s2) / mlen;
};
