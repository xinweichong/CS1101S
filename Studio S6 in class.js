function remove_duplicates(lst) {
    return accumulate( (head,tail) => pair(head, 
                                           filter(z => !equal(z, head), tail)), 
                      null, 
                      lst);
}

function remove_duplicates_2(lst) {
    return accumulate( ((head, tail) => is_null(member(head, tail))
                                            ? pair(head, tail)
                                            : tail), 
                      null, 
                      lst);
}

//display_list(remove_duplicates_2(list(1, 2, 3, 4, 4, 3, 2, 1)));

function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        
        const without_head = subsets(tail(xs));
        
        const use_head = map(x => pair(head(xs), x), subsets(tail(xs)));
        
        return append(use_head, without_head);
    }
}

//display_list(subsets(list(1, 2, 3)));


/*function permutations(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        //
        //const map_first = map(x, permutations(tail(xs)));
        
        //permutations without first
        const permute_without_first = x => remove(x, xs);
        
        return first;
    }
    
}*/

function permutation_2(xs) {
    return is_null(xs) 
           ? list(null)
           : accumulate(append,
                        null, 
                        map(x => map(ys => pair(x, ys), permutation_2(remove(x, xs))), xs));
}

display_list(permutation_2(list(1, 2, 3)));