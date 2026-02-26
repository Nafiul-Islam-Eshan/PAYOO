/** 
 * Cash out logical steps:
    1- Get the agent number and validate
    2- Get the amount, validate, convert to number
    3- Get the current balance
    4- Calculate new balance
       4-1- New balance validation
    5- Get the password and verify
       5-1 true:: show an alert and set new balance
       5-2 false:: show an error alert
 */

document.querySelector("#btn-cashout").addEventListener("click",function(event){
    // 1- Get the agent number and validate
    const agentNumber = giveIdTakeInputValue("cashout-number");
    console.log("Agent Number: ",agentNumber);
    if(agentNumber.length !== 11 ){
        alert("Invalid Phone Number");
        return;
    }

    // 2- Get the amount, validate, convert to number
    const casoutAmount = Number(giveIdTakeInputValue("cashout-amount")) ;
    console.log("Cash out amount:",casoutAmount);

    // 3- Get the current balance
    balance = getBalance();
    console.log("Balance:",balance)

    // 4- Calculate new balance
    let newBalance = Number(balance) - Number(casoutAmount);
    // 4-1- New balance validation
    if (newBalance < 0){
        alert("You do not have sufficient balance");
        return;
    } 

    // 5- Get the password and verify
    const cashoutPassword = giveIdTakeInputValue("cashout-password") ;
    console.log("Password:",cashoutPassword);
     
    // 5-1 true:: show an alert and set new balance
    if (cashoutPassword == "1234"){
        const d = new Date()
        const date = d.toLocaleDateString("en-GB");
        const time = d.toLocaleTimeString("en-GB");

        alert(`Cashout successful at ${time} on ${date} ✅`);
        setBalance(newBalance);
        console.log("New Balance:",newBalance);
    }

    // 5-2 false:: show an error alert
    else{
        alert("Invalid Password");
    }
});

// Hide all forms just when browser is loaded.
document.addEventListener("DOMContentLoaded", function(){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");
    const transactions = document.getElementById("transactions");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden");
    transactions.classList.add("hidden");

})