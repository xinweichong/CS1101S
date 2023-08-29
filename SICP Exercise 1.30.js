function sum(term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), term(a) + result);
    }
    return iter(a, 0);
}

function cube(x) {
    return x * x * x;
}

function inc(x) {
    return x + 1;
}

function sum_cubes(a, b) {
    return sum(cube, a, inc, b);
}

sum_cubes(3, 5);