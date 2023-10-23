function transpose(M) {
    const width = array_length(M);
    
    const half_width = math_floor(width / 2);
    
    for (let i = 0; i < width; i = i + 1) {
        for (let j = i + 1; j < width; j = j + 1) {
            const temp = M[i][j];
            M[i][j] = M[j][i];
            M[j][i] = temp;
        }
    }
    
    for (let k = 0; k < width; k = k + 1) {
        for (let l = 0; l < half_width; l = l + 1) {
            const temp2 = M[k][l];
            M[k][l] = M[k][width - l - 1];
            M[k][width - l - 1] = temp2;
        }
        
    }
    
    return M;
}

let a = [[1, 2, 3, 4], 
         [5, 6, 7, 8], 
         [9, 10, 11, 12],
         [13, 14, 15, 16]];
transpose(a);