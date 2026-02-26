/**
 * Money transferring logical steps:
 * 1- get the account number
 *  1-1- Account number validation
 * 2- Get the tranfer money ammount
 * 3- Get the current balance, validate, convert to number
 * 4- New balance calculation
 *  4-1- New balance validation
 * 5- get the password and check
 *  5-1- true:: show an alert and set new balance
 *  5-2- false:: show an error alert
 */

document.getElementById("btn-transfer-money").addEventListener("click", function(){

    // 1- get the account number
    const accoountNumber = giveIdTakeInputValue("transfer-money-number");
    console.log("Account number:",accoountNumber);
    // 1-1- account number Validation
    if(accoountNumber.length !== 11){
        alert("Invalid account number");
        return;
    }


    
    // 2- Get the transfer money ammount
    const transferMoney = giveIdTakeInputValue("transfer-money-amount");
    console.log("Amount:",transferMoney);



    // 3- Get current balance
    const currentBalance = getBalance();
    console.log(`Available balance = ${currentBalance}`);



    // 4- Calculate new balance
    let newBalance = Number(currentBalance) - Number(transferMoney);
    // 4-1- New balance validation
    if (newBalance < 0){
        alert("You do not have sufficient balance");
        return;
    } 



    // 5- Get the password and verify
    const transferMoneyPassword = giveIdTakeInputValue("transfer-money-password") ;
    console.log("Password:",transferMoneyPassword);
    // 5-1 true:: show an alert and set new balance
    if (transferMoneyPassword == "1234"){
        alert("Cash out successful ✅");
        setBalance(newBalance);
        console.log("New Balance:",newBalance);
    }
    // 5-2 false:: show an error alert
    else{
        alert("Invalid Password");
    }
})