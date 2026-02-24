/** 
 * Cash out logical steps:
    1- Get the agent number and validate
    2- Get the amount, validate, convert to number
    3- Get the current balance, validate, convert to number
    4- Calculate new balance
    5- Get the password and verify
    5-1 true:: show an alert and set new balance
    5-2 false:: show an error alert
 */

document.querySelector("#btn-cashout").addEventListener("click",function(event){
    // 1- Get the agent number and validate
    const agentNumberInput = document.querySelector("#cashout-number");
    const agentNumber = agentNumberInput.value;
    console.log("Agent Number: ",agentNumber);

    // 2- Get the amount, validate, convert to number
    const casoutAmountInput = document.querySelector("#cashout-amount");
    const casoutAmount = casoutAmountInput.value;
    console.log("Cash out amount:",casoutAmount);

    // 3- Get the current balance, validate, convert to number
    const balanceElement = document.getElementById('balance');
    let balance = balanceElement.innerText ;
    console.log("Balance:",balance)

    // 4- Calculate new balance
    let newBalance = Number(balance) - Number(casoutAmount);
    if (newBalance < 0){
        alert("You do not have sufficient balance");
        return;
    } 

    // 5- Get the password and verify
    const cashoutPasswordInput = document.getElementById("cashout-password");
    const cashoutPassword = cashoutPasswordInput.value;
    console.log("Password:",cashoutPassword);
     
    // 5-1 true:: show an alert and set new balance
    if (cashoutPassword == "1234"){
        alert("Cash out successful ✅");
        balanceElement.innerText = Number(newBalance);
        console.log("New Balance:",newBalance);
    }

    // 5-2 false:: show an error alert
    else{
        alert("Invalid Password");
    }
});