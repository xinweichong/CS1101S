//Task 1A
function insert_subseq(L, pos, S) {
    
    let result = null;
    
    for (let i = 0; i < pos; i = i + 1) {
        result = pair(head(L), result);
        L = tail(L);
    }
    
    for (let j = S; !is_null(j); j = tail(j)) {
        result = pair(head(j), result);
    }
    
    for (let k = L; !is_null(k); k = tail(k)) {
        result = pair(head(k), result);
    }
    
    return reverse(result);
    
}


//Task 1B
function remove_subseq(L, start_pos, end_pos) {
    
    let result = null;
    // let count = 0;
    
    // for (let i = L; !is_null(i); i = tail(i)) {
    //     if ((count < start_pos) || (count > end_pos)) {
    //         result = pair(head(i), result);
    //     }
    //     count = count + 1;
    // }
    
    for (let i = 0; i < length(L); i = i + 1) {
        if ((i < start_pos) || (i > end_pos)) {
            result = pair(head(L), result);
        }
        L = tail(L);
    }
    
    return (result);
    
}

remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 2, 4 );