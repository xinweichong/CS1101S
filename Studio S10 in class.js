function transpose(M) {
    const og_rows = array_length(M);
    const og_cols = array_length(M[0]);
    const new_M = [];
    
    for (let r = 0; r < og_cols; r = r + 1) {
        new_M[r] = [];
        for (let c = 0; c < og_rows; c = c + 1) {
            new_M[r][c] = M[c][r];
        }
    }
    
    return new_M;
}