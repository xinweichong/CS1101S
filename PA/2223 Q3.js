
// Task 3A

function make_NiFT(T) {
    
    // if (is_number(T)) {
    //     return T;
    // } else {
    //     let nums = null;
    //     let trees = null;
        
    //     const len = length(T);
        
    //     for (let i = T; !is_null(i); i = tail(i)) {
    //         if (is_number(head(i))) {
    //             nums = pair(head(i), nums);
    //         } else {
    //             trees = pair(head(i), trees);
    //         }
    //     }
        
    //     nums = reverse(nums);
    //     trees = reverse(trees);
        
    //     trees = map(x => make_NiFT(x), trees);
        
    //     return append(nums, trees);
    // }
    
    if (is_number(T)) {
        return T;
    } else {
        const nums = filter(x => is_number(x), T);
        let trees = filter(x => !is_number(x), T);
        
        trees = map(x => make_NiFT(x), trees);
        
        return append(nums, trees);
    }
}

// Task 3B

function insert(x, xs) {
    return is_null(xs) 
          ? list(x)
          : x <= head(xs)
          ? pair(x, xs)
          : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
          ? xs
          : insert(head(xs), insertion_sort(tail(xs)));
}

function map_tree(fun, tree) {
    return map(sub_tree => 
                    !is_list(sub_tree)
                     ? fun(sub_tree)
                     : map_tree(fun, sub_tree),
              tree);
}

function flatten_tree(tree) {
    return is_null(tree)
            ? null
            : !is_list(head(tree))
            ? pair(head(tree), flatten_tree(tail(tree)))
            : append(flatten_tree(head(tree)), 
                     flatten_tree(tail(tree)));
}

function make_SToN(T) {
    let ls = flatten_tree(T);
    ls = insertion_sort(ls);
    
    function traverse(x) {
        const hd = head(ls);
        ls = tail(ls);
        return hd;
    }
    
    return map_tree(traverse, T);
}