function stream_append_pickle(xs, ys) {
    return is_null(xs)
           ? ys()
           : pair(head(xs), () => stream_append_pickle(stream_tail(xs), ys));
}

function stream_pairs2(s) {
    return is_null(s)
           ? null: stream_append_pickle(
                        stream_map(
                            sn => pair(head(s), sn), stream_tail(s)),
                        () => stream_pairs2(stream_tail(s)));
}

function interleave_stream_append(s1, s2) {
    return is_null(s1)
            ? s2
            : pair(head(s1), () => interleave_stream_append(s2, stream_tail(s1)));
}

//1e
function stream_pairs3(s) {
    return is_null(s) || is_null(stream_tail(s))
            ? null
            : pair( pair(head(s), head(stream_tail(s))), 
                () => interleave_stream_append(
                        stream_map( x => pair(head(s), x), 
                                    stream_tail(stream_tail(s))),
                        stream_pairs3(stream_tail(s))));
}

function add_streams(s1, s2) {
    return is_null(s1)
            ? s2
            : is_null(s2) 
                ? s1
                : pair(head(s1) + head(s2), 
                        () => add_streams(stream_tail(s1), stream_tail(s2)));
}

const ones = pair(1, () => ones);

const integers = pair(1, () => add_streams(ones, integers));

const pairs = stream_map(x => pair(1, x), stream_tail(integers));

const pairs2 = stream_map(x => pair(2, x), stream_tail(stream_tail(integers)));

const s2 = stream_pairs3(integers);

eval_stream(s2, 20);