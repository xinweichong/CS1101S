function cube(x) {
    return x*x*x;
}

function improve(guess, x) {
    return ((x / (guess*guess)) + (2*guess))/3;
}

function is_good_enough(guess, x) {
    return (math_abs(cube(guess) - x) < 0.001);
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

sqrt(27);