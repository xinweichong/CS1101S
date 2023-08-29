function sum(term, a, next, b) {
    return a > b
           ? 0
           : term(a) + sum(term, next(a), next, b);
}

function product(term, a, next, b) {
    return a > b
           ? 1
           : term(a) * product(term, next(a), next, b);
}

function sum_iter(term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), term(a) + result);
    }
    return iter(a, 0);
}

function product_iter(term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), term(a) * result);
    }
    return iter(a, 1);
}

function inc(n) {
    return n + 1;
}

function accumulate(combiner, null_value, term, a, next, b) {
    return a > b
           ? null_value
           : combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b)); 
}

function accumulate_iter(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), combiner(term(a), result));
    }
    return iter(a, null_value);
}

function sum_2(a, b) {
    return a + b;
}

function product_2(a, b) {
    return a * b;
}

function cube(a) {
    return a * a * a;
}

accumulate_iter(sum_2, 0, cube, 1, inc, 4);