/*function d_filter_wrong(pred, xs) {
    let temp = xs;
    
    while (!pred(head(temp))) {
        temp = tail(temp);
    }
    
    xs = temp;

    
    let mark = xs;
    let target = tail(mark);
    while (!is_null(target)) {
        
        if (!pred(head(target))) {
            target = tail(target);
            
        } else {
            
            set_tail(mark, target);
            mark = tail(mark);
            target = tail(target);
            
        }
    }
    set_tail(mark, target);
    
    return xs;
}*/


function d_filter(pred, xs) {
    if (is_null(xs)) {
        return xs;
    } else if (pred(head(xs))) {
        set_tail(xs, d_filter(pred, tail(xs)));
        return xs;
    } else {
        return d_filter(pred, tail(xs));
    }
}

const L = list(1, 3, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L);
L;