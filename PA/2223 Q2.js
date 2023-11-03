
// Task 2A
function is_prefix_of(subseq, seq) {
    const len_ss = length(subseq);
    const len_s = length(seq);
    
    if (len_ss > len_s) {
        return false;
    } else if ((is_null(subseq))){
        return true;
    } else {
        if (head(subseq) === head(seq)) {
            return is_prefix_of(tail(subseq), tail(seq));
        } else {
            return false;
        }
    }
}

// Task 2B
function tail_n_times(xs, n) {
    return is_null(xs)
           ? null
           : n <= 0
           ? xs
           : tail_n_times(tail(xs), n - 1);
}

function subseq_replace(new_sub, old_sub, seq) {
    // const len_old = length(old_sub);
    
    // const rev_new = reverse(new_sub);
    
    // let result = null;
    
    // while(!is_null(seq)) {
        
    //     if (!is_prefix_of(old_sub, seq)) {
    //         result = pair(head(seq), result);
    //         seq = tail(seq);
    //     } else {
    //         result = append(rev_new, result);
    //         seq = tail_n_times(seq, len_old);
    //     }
    
    // }
    
    // return reverse(result);

    if (is_null(seq)) {
        return null; 
    } else if (!is_prefix_of(old_sub, seq)) {
        return pair(head(seq), subseq_replace(new_sub, old_sub, tail(seq)));
    } else {
        const len_old = length(old_sub);
        return append(new_sub, subseq_replace(new_sub, old_sub, tail_n_times(seq, len_old)));
    }

}