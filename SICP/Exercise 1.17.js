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
        ? fast_times_actual(a, b)
        : fast_times_actual(b, a);
}

function fast_times_actual(a, b) {
    return b === 1
        ? a
        : is_even(b)
        ? fast_times_actual(double(a), halve(b))
        : a + fast_times_actual(a, b-1);
}

fast_times(3, 500);
