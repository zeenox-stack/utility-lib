export function minPathSum(grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  const dp = Array.from({ length: rows }, () => Array(columns).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 1; i < columns.length; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < rows.length; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < rows.length; i++) {
    for (let j = 1; j < columns.length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
}


