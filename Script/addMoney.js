/**
 * Add money logical steps:
 * 1- get the bank
 * 2- get the account number
      2-1- account number validaton
 * 3- Get the add money ammount
 * 4- New balance calculation
 * 5- get the password and check
      5-1- true:: show an alert and set new balance
            5-1-1- save the transaction history to transactions
            5-1-2- get the transitions-cards-container
            5-1-3- create new div
            5-1-4- inserting infos into the div by changing innerHTMl
            5-1-5- append the new div to the transitions-cards-container 
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
        const d = new Date()
        const date = d.toLocaleDateString("en-GB");
        const time = d.toLocaleTimeString("en-GB");

        alert(`Add money successful at ${time} on ${date} ✅`);
        setBalance(newBalance);

        // 5-1-1- save the transaction history to transactions
        // 5-1-2- get the transitions-cards-container
        const parent = document.getElementById("transitions-cards-container");
        
        // 5-1-3- create new div
        const newDiv = document.createElement("div");
        
        // 5-1-4- inserting infos into the div by changing innerHTMl
        newDiv.innerHTML = `
        <div class="p-5 bg-base-200 ">
            <img src="./assets/opt-1.png" alt="">
            <p class="font-bold text-xl">Add Money</p>
            Account Number = ${accountNumber} <br>
            Amount = ${addMoneyAmmount} Taka <br>
            Time = ${time} <br>
            Date = ${date} <br>
        </div>
        `;

        // 5-1-5- append the new div to the transitions-cards-container
        parent.append(newDiv);

    }

    // 5-2 false:: show an error alert
    else{
        alert( `Invalid Password`);
        return;
    }

});