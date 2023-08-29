function f_r(n) {
    return n < 3
        ? n
        : f_r(n-1) + (2*f_r(n-2)) + (3*f_r(n-3));
}

f_r(3);


function f_i(n) {
    return n < 3
        ? n
        : iter(2, 1, 0, n-2);
}

function iter(a, b, c, count) {
    return count === 0 
        ? a
        : iter((a+(2*b)+(3*c)), a, b, count-1);
}

f_i(6)- f_r(6);
