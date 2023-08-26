function is_even(n) {
    return n % 2 === 0;
}

function exp(b, n) {
    return iter_exp(1, b, n);
}

function iter_exp(a, b, n) {
    return n === 0
        ? a
        : is_even(n)
        ? iter_exp(a, b*b, n/2)
        : iter_exp(a*b, b, n-1);
}

exp(3, 4);