function remove_duplicates(lst) {
    return accumulate( (head,tail) => pair(head, 
                                           filter(z => !equal(z, head), tail)), 
                      null, 
                      lst);
}

//display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1)));

function subsets(xs) {
    if (xs === null) {
        return list(null);
    } else {
        const use_head = map(x => pair())subsets(tail(xs));
        
        const 
    }
}