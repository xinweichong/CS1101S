function count_pairs(x) {
    if (!is_pair(x)) {
        return 0;
    } else {
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
    }
}

function count_pairs_correct(x) {
    
    let pairs = null;
    
    function check(xs) {
        if (!is_pair(xs)) {
            return undefined;
        } else if (!is_null(member(xs, pairs))) {
            return undefined;            
        } else {
            pairs = pair(xs, pairs);
            
            check(tail(x));
            
            check(head(x));
        }
    } 
    
    check(x);
    
    return length(pairs);
    
}

let c = pair(1, 2);
let b = pair(c,  c);
let a = pair(b, b); 


display_list(b);
count_pairs_correct(b);