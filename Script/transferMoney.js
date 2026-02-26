/*
 * Money transferring logical steps:
 *    1- get the account number
         1-1- Account number validation
 *    2- Get the tranfer money ammount
 *    3- Get the current balance, validate, convert to number
 *    4- New balance calculation
         4-1- New balance validation
 *    5- get the password and check
         5-1- true:: show an alert and set new balance
            5-1-1- save the transaction history to transactions
            5-1-2- get the transitions-cards-container
            5-1-3- create new div
            5-1-4- inserting infos into the div by changing innerHTMl
            5-1-5- append the new div to the transitions-cards-container 
         5-2- false:: show an error alert
 */

document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function () {
    // 1- get the account number
    const accoountNumber = giveIdTakeInputValue("transfer-money-number");
    
    // 1-1- account number Validation
    if (accoountNumber.length !== 11) {
      alert("Invalid account number");
      return;
    }

    // 2- Get the transfer money ammount
    const transferMoney = giveIdTakeInputValue("transfer-money-amount");

    // 3- Get current balance
    const currentBalance = getBalance();

    // 4- Calculate new balance
    let newBalance = Number(currentBalance) - Number(transferMoney);
    // 4-1- New balance validation
    if (newBalance < 0) {
      alert("You do not have sufficient balance");
      return;
    }

    // 5- Get the password and verify
    const transferMoneyPassword = giveIdTakeInputValue(
      "transfer-money-password",
    );
    console.log("Password:", transferMoneyPassword);
    // 5-1 true:: show an alert and set new balance
    if (transferMoneyPassword == "1234") {
      const d = new Date();
      const date = d.toLocaleDateString("en-GB");
      const time = d.toLocaleTimeString("en-GB");

      alert(`Transfer money successful at ${time} on ${date} ✅`);
      setBalance(newBalance);

      // 5-1-1- save the transaction history to transactions
      // 5-1-2- get the transitions-cards-container
      const parent = document.getElementById("transitions-cards-container");

      // 5-1-3- create new div
      const newDiv = document.createElement("div");

      // 5-1-4- inserting infos into the div by changing innerHTMl
      newDiv.innerHTML = `
        <div class="p-5 bg-base-200 ">
            <img src="./assets/opt-3.png" alt="">
            <p class="font-bold text-xl">Tranfer Money</p>
            Account Number = ${accoountNumber} <br>
            Amount =<span class="text-red-500"> -${transferMoney} Taka</span>  <br>
            Time = ${time} <br>
            Date = ${date} <br>
        </div>
        `;

      // 5-1-5- append the new div to the transitions-cards-container
      parent.append(newDiv);
    }
    // 5-2 false:: show an error alert
    else {
      alert("Invalid Password");
    }
  });
