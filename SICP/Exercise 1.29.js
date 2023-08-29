function sum(term, a, next, b) {
    return a > b
        ? 0
        : term(a) + sum(term, next(a), next, b);
}

function cube(n) {
    return n*n*n;
}

function integral(func, a, b, n) {
    // define h
    const h = (b - a) / n;
    // define function to return yk
    function f(n) {
        return a + (n * h);
    }
    // define function to cycle to y(k+2)
    function next(x) {
        return x + (2 * h);
    }
    // Simpson's rule
    return (h / 3) * (
                      (func(a) + func(b)) 
                       + 4 * sum(func, f(1), next, f(n - 1)) 
                       + 2 * sum(func, f(2), next, f(n - 2))
                     );
}

integral(cube, 0, 1, 1000);
