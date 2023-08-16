function average(x, y) {
    return (x+y)/2;
}

function improve(guess, x) {
    return average(guess, x/guess);
}

function is_good_enough(previous_guess, current_guess) {
    return (math_abs(previous_guess - current_guess) < 0.001);
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, improve(guess, x))
    ? guess
    : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

sqrt(1982595235462);