function every_second(items) {
    if (is_null(items)) {
        return null;
    } else if (is_null(tail(items))) {
        return null;
    } else {
        return pair(head(tail(items)), every_second(tail(tail(items))));
    }
}

function every_second_2(items) {
    function helper(n, result) {
        if (n === length(items) || n + 1 === length(items)) {
            return result;
        } else {
            return helper(n + 2, pair(list_ref(items, n), result));
        }
    }
    return reverse(helper(1, null));
}

every_second_2(list(1, 2, 3, 4, 5, 6, 7));

function sums(items) {
    if (is_null(items)) {
        return list(0, 0);
    } else if (is_null(tail(items))) {
        return list(head(items), 0);
    } else {
        const wish = sums(tail(tail(items)));
        return list(head(items) + head(wish), head(tail(items)) + head(tail(wish)));
    }
}

function sums_2(items) {
    function helper(n, odd, even) {
        if (n === length(items)) {
            return list(odd, even);
        } else if (n % 2 === 0) {
            return helper(n + 1, odd + list_ref(items, n), even);
        } else {
            return helper(n + 1, odd, even + list_ref(items, n));
        }
    }
    return helper(0, 0, 0);
}

sums_2(list(1, 2, 3, 4, 5));