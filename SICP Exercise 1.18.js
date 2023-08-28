function is_even(n) {
    return n % 2 === 0;
}

function double(a) {
    return 2*a;
}

function halve(a) {
    return a/2;
}

function fast_times(a, b) {
    return a >= b
        ? fast_times_iter(a, b, 0)
        : fast_times_iter(b, a, 0);
}

function fast_times_iter(a, b, c) {
    return b === 1
        ? a
        : is_even(b)
        ? fast_times_iter(double(a), halve(b), c)
        : a + fast_times_iter(a, b-1);
}

fast_times(3, 500);