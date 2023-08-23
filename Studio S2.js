// Type your program in here!
function biggie_size(order) {
    return order+4;
}

function unbiggie_size(order) {
    return order-4;
}

function is_biggie_size(size) {
    return size > 4 ? true : false;
}

function combo_price(combo) {
    return is_biggie_size(combo) ? 0.50 + (1.17 * unbiggie_size(combo)) : 1.17 * combo;
}

function empty_order() {
    return 0;
}

function add_to_order(old_order, new_order) {
    return (old_order*10) + new_order;
}

function last_combo(order) {
    return order % 10;
}

function other_combos(order) {
    return (order - last_combo(order))/10;
}

biggie_size(2);
unbiggie_size(8);
is_biggie_size(5);
is_biggie_size(4);
combo_price(8);
empty_order();
add_to_order(1, 2);
add_to_order(123, 7);
last_combo(1237);
other_combos(24);

