/**
 * Money transferring logical steps:
 * 1- get the account number
 * 2- Get the tranfer money ammount
 * 4- New balance calculation
 * 5- get the password and check
 *  5-1- true:: show an alert and set new balance
 *  5-2- false:: show an error alert
 */

document.getElementById("btn-transfer-money").addEventListener("click", function(){

    // 1- get the account number
    const accoountNumber = giveIdTakeInputValue("transfer-money-number");
    console.log("Account number:",accoountNumber);
    
    // 2- Get the transfer money ammount
    const transferMoney = giveIdTakeInputValue("transfer-money-amount");
    console.log("Amount:",transferMoney);
})