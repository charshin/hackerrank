function highestValuePalindrome(s, n, k) {
  let d = 0;
  let rs = s.split('').map(v => parseInt(v));
  const cost = [];

  // Minimum changes need to form palindrome
  for (let i = 0; i <= Math.floor((n + 1) / 2) - 1; i++) {
    if (rs[i] !== rs[n - 1 - i]) {
      d++;
      if (k - d < 0) return -1;
      rs[i] = rs[n - 1 - i] = Math.max(rs[i], rs[n - 1 - i]);
      cost[i] = rs[i] === 9 ? 0 : 1;
    } else {
      cost[i] = rs[i] === 9 ? 0 : 2;
      i === n - 1 - i && (cost[i] /= 2);
    }
  }

  // Create highest value palindrome with available changes left
  for (let i = 0, e = k - d; i <= (Math.floor((n + 1) / 2) - 1) && e > 0; i++) {
    if (rs[i] !== 9 && e >= cost[i]) {
      rs[i] = rs[n - 1 - i] = 9;
      e -= cost[i];
    }
  }

  console.log(rs.join(''));

  return rs.join('');
}

highestValuePalindrome('329', 3, 2); // Output: 999
highestValuePalindrome('1111911', 8, 4); // Output: 91199119