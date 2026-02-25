document.getElementById("btn-add-money").addEventListener("click", function() { 
    // 1- Get the bank
    const addMoneyBank = giveIdTakeInputValue("add-money-bank");
    console.log(`Bank = ${addMoneyBank}`);
    
    // 2- get the account Number
    const accountNumber = giveIdTakeInputValue("add-money-number")
    if(accountNumber.length !== 11){
        alert("Invalid account number");
        return;
    }
    else{
        console.log(`Account Number = ${accountNumber}`);
    }
    
    // 3- Get the add money ammount
    const addMoneyAmmount = giveIdTakeInputValue("add-money-amount");
    console.log(`Add money ammount = ${Number(addMoneyAmmount)}`);
    
    // 4- New balance calculation
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addMoneyAmmount);
    console.log(`New Balance = ${Number(newBalance)}`);

    // 5- get the password and check
    const addMoneyPassword = giveIdTakeInputValue("add-money-password")
    console.log(`Password = ${addMoneyPassword}`);

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