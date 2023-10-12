/*function make_withdraw(balance, password) {
    
    let count = 0;
    
    function withdraw(amount, attempt) {
        
        while (count < 3) {
            if (attempt === password) {
                count = 0;
                
                if (balance >= amount) {
                    balance = balance - amount;
                    return balance;
                } else {
                    return "Insufficient funds";
                }
            } else {
                count = count + 1;
                return "Wrong password, no withdraw";
            }
        }
        
        return "Account disabled";
    }
    
    function withdraw2(amount, attempt) {
        
        if (attempt === password) {
            count = 0;
            if (balance >= amount) {
                balance = balance - amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        } else if (count === 3) {
            return "Account disabled";
        } else {
            count = count + 1;
            return "Wrong password, no withdraw";
        }
        
        
    }
    
    return withdraw2;
    
}

const W1 = make_withdraw(100, "a");
display(W1(20, "a"));
display(W1(40, "b"));
display(W1(40, "c"));
display(W1(20, "a"));
display(W1(40, "b"));
display(W1(40, "c"));
display(W1(40, "c"));
display(W1(40, "a")); */


let commission = 25;

function make_price_calculator(tax_rate) {
    function calculator(cost) {
        return (commission + cost) * (1 + tax_rate);
    }
    return calculator;
}

const calc = make_price_calculator(0.07);
commission = 125;
calc(75);