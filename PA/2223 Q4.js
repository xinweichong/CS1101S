function shortest_path_length(maze, start_row, start_col) {
    const E = ".";
    const G = "G";
    const O = "#";
    
    const rows = array_length(maze);
    const cols = array_length(maze[0]);
    
    const dist = [];
    let target_row = 0;
    let target_col = 0;
    
    for (let i = 0; i < rows; i = i + 1) {
        dist[i] = [];
        for (let j = 0; j < cols; j = j + 1) {
            dist[i][j] = (i === start_row && j === start_col)
                         ? 0
                         : (maze[i][j] === E) 
                         ? undefined
                         : maze[i][j];
                         
            if (maze[i][j] === G) {
                target_row = i;
                target_col = j;
            }
        }
    }
    
    function distance_adder(current, ) {
        if ()
    }
    
}