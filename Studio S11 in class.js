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

//1e model answer
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

//other implementation?
function stream_pairs4(s) {
    function sub_stream(h, stream) {
	//Basically generates the given stream, (although it’s reversed))
        return is_null(stream)
               ? null
               : pair(
                   pair(head(stream), h), 
                   () => sub_stream(h, stream_tail(stream)));
    }
    
    function stream(stream1, stream2) {
        return is_null(stream1)
               ? null
               : stream_append_pickle(
                   stream_reverse(sub_stream(head(stream1), stream2)), 
                   () => stream(
                       stream_tail(stream1), 
                       pair(head(stream1), () => stream2)));
    }
           
    return stream(s, null);
}


const ones = pair(1, () => ones);

const integers = pair(1, () => add_streams(ones, integers));

const pairs = stream_map(x => pair(1, x), stream_tail(integers));

const pairs2 = stream_map(x => pair(2, x), stream_tail(stream_tail(integers)));

const s2 = stream_pairs4(integers);

eval_stream(s2, 20);