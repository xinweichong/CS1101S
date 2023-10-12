function make_withdraw(balance, password) {
    
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
    
    return withdraw;
    
}

