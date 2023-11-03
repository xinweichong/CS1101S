function shortest_path_length(maze, start_row, start_col) {
    const E = ".";
    const G = "G";
    const O = "#";
    
    const rows = array_length(maze);
    const cols = array_length(maze[0]);
    
    const dist = [];
    let target_row = 0;
    let target_col = 0;
    let min_dist = 0;
    
    for (let i = 0; i < rows; i = i + 1) {
        dist[i] = [];
        for (let j = 0; j < cols; j = j + 1) {
            dist[i][j] = (i === start_row && j === start_col)
                         ? 0
                         : (maze[i][j] === E || maze[i][j] === G) 
                         ? undefined
                         : maze[i][j];
                         
            if (maze[i][j] === G) {
                target_row = i;
                target_col = j;
            }
        }
    }
    
    function distance_adder(val, row, col) {
        if ((row >= 0) && (col >= 0) && (row < rows) && (col < cols)) {
            if ((dist[row][col] !== O)) {
                if (is_number(dist[row][col])) {
                    const curr = dist[row][col];
                    dist[row][col] = curr < val 
                                     ? val
                                     : curr;
                } else {
                    dist[row][col] = val;
                }
                
                distance_adder(val, row - 1, col);
                distance_adder(val, row + 1, col);
                distance_adder(val, row, col - 1);
                distance_adder(val, row, col + 1);
            }

        } 
    }
    
    distance_adder(0, start_row, start_col);
    
    if (is_number(dist[target_row][target_col])) {
        return dist[target_row][target_col];
    } else {
        return Infinity;
    }
    
}

const maze = 
[[".", "#", ".", "#"],
 [".", "#", "#", "."],
 [".", ".", ".", "G"],
 [".", "#", ".", "."],
 [".", ".", ".", "#"]];
 
 shortest_path_length(maze, 2, 3);