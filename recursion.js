import {circle, corner, heart, nova, make_cross, stack, stack_frac, show} from "rune";

/*function repeat_pattern(n, pattern, rune) {
    return n === 1 ? pattern(rune) : pattern(repeat_pattern(n-1, pattern, rune));
}*/

function repeat_pattern(n, pattern, rune) {
    return n === 0 ? rune : repeat_pattern(n-1, pattern, pattern(rune));
}

show(repeat_pattern(2, make_cross, heart));


function stack_n(n, rune) {
    return n === 1 ? rune : stack_frac(1/n, rune, stack_n(n-1, rune));
}

function factorial(n) {
    return iter(1, 1, n);
}

function iter(product, count, n){
    return count === n ? n * product : iter(product * count, count + 1, n);
}

factorial(5);

function fib(n) {
    return iter_2(1, 0, n);
}

function iter_2(a, b, n) {
    return n === 0 ? b : iter_2(a+b, a, n-1);
}

fib(5);