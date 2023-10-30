function add_streams(s1, s2) {
    return is_null(s1) 
           ? s2 
           : is_null(s2)
             ? s1
             : pair(head(s1) + head(s2),
                    () => add_streams(stream_tail(s1), stream_tail(s2)));
}

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

const add_series = add_streams;
const scale_series = scale_stream;

function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

const alt_ones = pair(1, () => pair(-1, () => alt_ones));

eval_stream(alt_ones, 10);

const zeros = add_streams(alt_ones, stream_tail(alt_ones));

const zeros2 = subtract_series(alt_ones, alt_ones);

eval_stream(zeros2, 10);

