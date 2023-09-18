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


function permutations(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        
        const map_heads = map(x => pair(x, permutations(filter(y => !equal(x, y), xs))), xs);
        
        //const without_head = permutations(map_heads);
        
        //const use_head = map(x => pair(head(xs), x), without_head);
        
        return map_heads;
    }
}

display_list(permutations(list(1, 2, 3)));