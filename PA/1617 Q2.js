// Instructions for students who are using this for practice:
//
// (1) Copy and paste this entire file into the editor of Source Academy
//     Playground at https://sourceacademy.nus.edu.sg/playground
// (2) Write your solution for each task in the Source Academy Playground.
// (3) Run the program to test your solution on the given testcases.


////////////////////////////////////////////////////////////
// Question 2A
////////////////////////////////////////////////////////////

function all_different(nums) {
    
    if (length(nums) === 1) {
        return true;
    } else {
        const x = head(nums);
        let valid = true;
        
        for (let y = tail(nums); !is_null(y); y = tail(y)) {
            if (x === head(y)) {
                valid = false;
            }
        }
        return valid && all_different(tail(nums));
    }

}



////////////////////////////////////////////////////////////
// Question 2B
////////////////////////////////////////////////////////////

function is_valid_toto_set(nums, n, min, max) {

    const len = length(nums);
    
    if (len !== n) {
        return false;
    } else {
        const filtered = filter(x => x < min || x > max, nums);
        if (!is_null(filtered)) {
            return false; 
        } else {
            return all_different(nums);
        }
    }

}



////////////////////////////////////////////////////////////
// Question 2C
////////////////////////////////////////////////////////////

function num_of_matches(numsA, numsB) {
    
    let count = 0;

    for (let i = numsA; !is_null(i); i = tail(i)) {
        const x = head(i);
        
        for (let j = numsB; !is_null(j); j = tail(j)) {
            const y = head(j);
            if (x === y) {
                count = count + 1;
            }
        }
    }
    
    return count;

}



////////////////////////////////////////////////////////////
// Question 2D
////////////////////////////////////////////////////////////

function check_winning_group(bet_nums, draw_nums, extra_num) {
    
    const n = length(bet_nums);

    const match = (num_of_matches(bet_nums, draw_nums));
    
    if (match < n - 2) {
        return 0;
    } else if (match === n) {
        return 1;
    } else if (match === n - 1) {
        return (!is_null(filter(x => x === extra_num, bet_nums)))
                ? 2
                : 3;
    } else {
        return (!is_null(filter(x => x === extra_num, bet_nums)))
                ? 4
                : 5;        
    }
    
}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


//===========================================================
// This function is provided for running the testcases
// in the Source Academy Playground.
// They are NOT part of the actual testing facility provided
// in the actual Practical Assessment.
//===========================================================
function assert(f, test_name, fnames) {
    display(test_name + ": " + (f() ? "PASS" : "FAIL"));
}
//===========================================================



////////////////////////////////////////////////////////////
// Test Cases for Q2A
////////////////////////////////////////////////////////////

assert(
    () => {
        const nums = list(23);
        return equal(all_different(nums), true);
    },
    "Q2A-T1",
    ['all_different']
);

assert(
    () => {
        const nums = list(2, 5, 1, 6, 7, 4, 3);
        return equal(all_different(nums), true);
    },
    "Q2A-T2",
    ['all_different']
);

assert(
    () => {
        const nums = list(2, 6, 1, 7, 6, 4, 3);
        return equal(all_different(nums), false);
    },
    "Q2A-T3",
    ['all_different']
);

assert(
    () => {
        const nums = list(3, 2);
        return equal(all_different(nums), true);
    },
    "Q2A-T4",
    ['all_different']
);

assert(
    () => {
        const nums = list(3, 2, 1, 9, 8);
        return equal(all_different(nums), true);
    },
    "Q2A-T5",
    ['all_different']
);

assert(
    () => {
        const nums = list(2, 6, 3, 7, 6, 6, 3, 1);
        return equal(all_different(nums), false);
    },
    "Q2A-T6",
    ['all_different']
);



////////////////////////////////////////////////////////////
// Test Cases for Q2B
////////////////////////////////////////////////////////////

assert(
    () => {
        const nums = list(5, 1, 8, 49);
        const n = 6;
        const min = 1;
        const max = 49;
        return equal(is_valid_toto_set(nums, n, min, max), false);
    },
    "Q2B-T1",
    ['is_valid_toto_set']
);

assert(
    () => {
        const nums = list(25, 13, 2, 31, 30, 3, 15);
        const n = 7;
        const min = 3;
        const max = 30;
        return equal(is_valid_toto_set(nums, n, min, max), false);
    },
    "Q2B-T2",
    ['is_valid_toto_set']
);

assert(
    () => {
        const nums = list(25, 13, 8, 14, 30, 3, 8);
        const n = 7;
        const min = 3;
        const max = 30;
        return equal(is_valid_toto_set(nums, n, min, max), false);
    },
    "Q2B-T3",
    ['is_valid_toto_set']
);

assert(
    () => {
        const nums = list(25, 13, 8, 14, 30, 3, 15);
        const n = 7;
        const min = 3;
        const max = 30;
        return equal(is_valid_toto_set(nums, n, min, max), true);
    },
    "Q2B-T4",
    ['is_valid_toto_set']
);

assert(
    () => {
        const nums = list(40, 20, 30, 15, 10);
        const n = 5;
        const min = 10;
        const max = 40;
        return equal(is_valid_toto_set(nums, n, min, max), true);
    },
    "Q2B-T5",
    ['is_valid_toto_set']
);

assert(
    () => {
        const nums = list(40, 20, 30, 15, 40);
        const n = 5;
        const min = 10;
        const max = 40;
        return equal(is_valid_toto_set(nums, n, min, max), false);
    },
    "Q2B-T6",
    ['is_valid_toto_set']
);



////////////////////////////////////////////////////////////
// Test Cases for Q2C
////////////////////////////////////////////////////////////

assert(
    () => {
        const numsA = list(23, 21, 30, 15, 40);
        const numsB = list(3, 29, 40, 15, 20 );
        return equal(num_of_matches(numsA, numsB), 2);
    },
    "Q2C-T1",
    ['num_of_matches']
);

assert(
    () => {
        const numsB = list(23, 21, 30, 15, 40);
        const numsA = list(3, 29, 40, 15, 20);
        return equal(num_of_matches(numsA, numsB), 2);
    },
    "Q2C-T2",
    ['num_of_matches']
);

assert(
    () => {
        const numsA = list(23, 21, 30, 15, 40);
        const numsB = list(31, 29, 41, 16, 20);
        return equal(num_of_matches(numsA, numsB), 0);
    },
    "Q2C-T3",
    ['num_of_matches']
);

assert(
    () => {
        const numsA = list(23, 21, 30, 15, 40, 4, 2, 1);
        const numsB = list(1, 21, 23, 30, 4, 15, 2, 40);
        return equal(num_of_matches(numsA, numsB), 8);
    },
    "Q2C-T4",
    ['num_of_matches']
);

assert(
    () => {
        const numsA = list(2, 1, 30, 15);
        const numsB = list(31, 29, 41, 16);
        return equal(num_of_matches(numsA, numsB), 0);
    },
    "Q2C-T5",
    ['num_of_matches']
);

assert(
    () => {
        const numsA = list(2, 1, 30, 15);
        const numsB = list(15, 29, 2, 16);
        return equal(num_of_matches(numsA, numsB), 2);
    },
    "Q2C-T6",
    ['num_of_matches']
);

assert(
    () => {
        const numsA = list(23, 21, 30, 15, 40, 4, 2, 1, 35);
        const numsB = list(1, 21, 23, 35, 30, 4, 15, 2, 40);
        return equal(num_of_matches(numsA, numsB), 9);
    },
    "Q2C-T7",
    ['num_of_matches']
);



////////////////////////////////////////////////////////////
// Test Cases for Q2D
////////////////////////////////////////////////////////////

assert(
    () => {
        const bet_nums = list(40, 30, 1, 49, 23, 15);
        const draw_nums = list(23, 1, 30, 15, 40, 49);
        const extra_num = 27;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 1);
    },
    "Q2D-T1",
    ['check_winning_group']
);

assert(
    () => {
        const bet_nums = list(40, 30, 1, 49, 27, 15);
        const draw_nums = list(23, 1, 30, 15, 40, 49);
        const extra_num = 27;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 2);
    },
    "Q2D-T2",
    ['check_winning_group']
);

assert(
    () => {
        const bet_nums = list(40, 30, 1, 49, 17, 15);
        const draw_nums = list(23, 1, 30, 15, 40, 49);
        const extra_num = 27;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 3);
    },
    "Q2D-T3",
    ['check_winning_group']
);

assert(
    () => {
        const bet_nums = list(40, 27, 1, 49, 17, 15);
        const draw_nums = list(23, 1, 30, 15, 40, 49);
        const extra_num = 27;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 4);
    },
    "Q2D-T4",
    ['check_winning_group']
);

assert(
    () => {
        const bet_nums = list(40, 37, 1, 49, 17, 15);
        const draw_nums = list(23, 1, 30, 15, 40, 49);
        const extra_num = 27;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 5);
    },
    "Q2D-T5",
    ['check_winning_group']
);

assert(
    () => {
        const bet_nums = list(40, 37, 1, 49, 17, 27);
        const draw_nums = list(23, 1, 30, 15, 40, 49);
        const extra_num = 27;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 0);
    },
    "Q2D-T6",
    ['check_winning_group']
);

assert(
    () => {
        const bet_nums = list(21, 32, 1, 49, 27, 15, 3);
        const draw_nums = list(21, 30, 1, 49, 27, 15, 3);
        const extra_num = 32;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 2);
    },
    "Q2D-T7",
    ['check_winning_group']
);

assert(
    () => {
        const bet_nums = list(41, 37, 2, 48, 17, 27);
        const draw_nums = list(23, 1, 30, 15, 40, 49);
        const extra_num = 27;
        return equal(check_winning_group(bet_nums, draw_nums, extra_num), 0);
    },
    "Q2D-T8",
    ['check_winning_group']
);
