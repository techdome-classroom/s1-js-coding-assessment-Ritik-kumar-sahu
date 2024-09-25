const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (r, c) => {
      // Check boundaries
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }
      
      // Mark the cell as visited
      grid[r][c] = 'W';
      dfs(r + 1, c); 
      dfs(r - 1, c); 
      dfs(r, c + 1); 
      dfs(r, c - 1); 
  };

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
