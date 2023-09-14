const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));

function flatten(lst) {
    return accumulate(append, null, lst);
}

display_list(flatten(LoL));

const mytree = list(1, list(2, list(3, 4), 5), list(6, 7));

function tree_sum(tree) {
    if (is_null(tree)) {
        return 0;
    } else {
        return (is_list(head(tree)) ? tree_sum(head(tree))
                                   : head(tree))
               + tree_sum(tail(tree));
    }
    
}

tree_sum(mytree);

function accumulate_tree(f, op, initial, tree) {
    return accumulate( (x,y) => op(is_list(x) ? accumulate_tree(f, op, initial, x) : f(x), y), initial, tree);
}

function tree_sum2(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0, tree);
}

tree_sum2(mytree);