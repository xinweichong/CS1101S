import {beside, stack, stack_frac, beside_frac, blank, square, heart, ribbon, circle, show} from "rune";

function moony_1(bottom_right, n) {
    return stack_frac((n - 1) / n,
                      beside_frac((n - 1) / n, circle, blank),
                      beside_frac((n - 1) / n, square, bottom_right));
}

/*function moony_2(n) {
    return n === 1
        ? circle
        : moony_1(moony_2(n-1));
}*/

function moony(n) {
    return n === 1
        ? circle
        : moony_1(moony(n-1), n);
}

show(moony_2(5));
show(moony(5));
