function my_map(f, xs) {
    return accumulate((x,y) => pair(f(x), y), null, xs);
}

//my_map(x => x + 1, list(1, 2, 3));

function remove_duplicates(lst) {
    return is_null(lst) 
           ? null
           : pair(head(lst), 
                  remove_duplicates(filter(x => !equal(x, head(lst)), 
                                           tail(lst))) );
}

//display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));


function makeupamount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        //Combinations that don't use the head coin
        const combi_A = makeupamount(x, tail(coins));
        //Combinations that don't use head coin for remaining amount
        const combi_B = makeupamount(x - head(coins), tail(coins));
        // Combinations that use the head coin (adding the head coin back to the front of those that already used it at the start)
        const combi_C = map(x => pair(head(coins), x), combi_B);
        
        
        return append(combi_A, combi_C);
    }
}

display_list(makeupamount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));




