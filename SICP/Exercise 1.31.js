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

function blank(x) {
    return x;
}

function factorial(x) {
    return product(blank, 1, inc, x);
}

function wallis(n) {
    const a = 2 * n;
    return (a / (a - 1)) * (a / (a + 1));
}

function approximation(n) {
    return product_iter(wallis, 1, inc, n);
}

approximation(1000);