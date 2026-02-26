/**
 * Add money logical steps:
 * 1- get the bank
 * 2- get the account number
 *    2-1- account number validaton
 * 3- Get the add money ammount
 * 4- New balance calculation
 * 5- get the password and check
 *    5-1- true:: show an alert and set new balance
 *    5-2- false:: show an error alert
 */


document.getElementById("btn-add-money").addEventListener("click", function() { 
    // 1- Get the bank
    const addMoneyBank = giveIdTakeInputValue("add-money-bank");
    if(addMoneyBank === "Select A Bank"){
        alert('Please, select a bank');
        return;
    }
    
    // 2- get the account Number
    const accountNumber = giveIdTakeInputValue("add-money-number")
    // 2-1- account number validaton
    if(accountNumber.length !== 11){
        alert("Invalid account number");
        return;
    }
    
    // 3- Get the add money ammount
    const addMoneyAmmount = giveIdTakeInputValue("add-money-amount");
    
    // 4- New balance calculation
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addMoneyAmmount);

    // 5- get the password and check
    const addMoneyPassword = giveIdTakeInputValue("add-money-password")

    // 5-1 true:: show an alert and set new balance
    if (addMoneyPassword == "1234"){
        alert("Add money successful ✅")
        setBalance(newBalance);
    }

    // 5-2 false:: show an error alert
    else{
        alert( `Invalid Password`);
        return;
    }

});