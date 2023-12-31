//Task 1A
function insert_subseq(L, pos, S) {
    
    // let result = null;
    // const len_L = length(L);
    // const len_S = length(S);
    
    // for (let i = 0; i < (len_L + len_S); i = i + 1) {
    //     if (i >= pos && !is_null(S)) {
    //         result = pair(head(S), result);
    //         S = tail(S);
    //     } else {
    //         result = pair(head(L), result);
    //         L = tail(L);
    //     }
    // }
    // return reverse(result);
    
    return (pos === 0)
            ? append(L, S);
            : pair(head(L), insert_subseq(tail(L), pos - 1, S));
}


//Task 1B
function remove_subseq(L, start_pos, end_pos) {
    
    // let result = null;
    // const len = length(L);
    
    // for (let i = 0; i < len; i = i + 1) {
    //     if ((i < start_pos) || (i > end_pos)) {
    //         result = pair(head(L), result);
    //     }
    //     L = tail(L);
    // }
    
    // return reverse(result);
    
    return (end_pos === 0) 
            ? null
            : (start_pos === 0)
            ? remove_subseq(tail(L), start_pos, end_pos - 1);
            : pair(head(L), remove_subseq(tail(L), start_pos - 1, end_pos - 1));
    
}


