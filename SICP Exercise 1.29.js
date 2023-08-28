function sum(term, a, next, b) {
    return a > b
        ? 0
        : term(a) + sum(term, next(a), next, b);
}

function cube(n) {
    return n*n*n;
}

function integral(func, a, b, n) {
    const h = (b-a)/(n);
    function f(n) {
        return a + (n * (h));
    }
    function next(x) {
        return x + (2 * (h));
    }
    return (h/3)*((func(a) + func(b)) + 4*sum(func, f(1), next, f(n-1)) + 2*sum(func, f(2), next, f(n-2)));
}

integral(cube, 0, 1, 100);