/** 
 * Cash out logical steps:
    1- Get the agent number and validate
    2- Get the amount, validate, convert to number
    3- Get the current balance
    4- Calculate new balance
       4-1- New balance validation
    5- Get the password and verify
       5-1 true:: show an alert and set new balance
           5-1-1- save the transaction history to transactions
           5-1-2- get the transitions-cards-container
           5-1-3- create new div
           5-1-4- inserting infos into the div by changing innerHTMl
           5-1-5- append the new div to the transitions-cards-container 
       5-2 false:: show an error alert
 */

document
  .querySelector("#btn-cashout")
  .addEventListener("click", function (event) {
    // 1- Get the agent number and validate
    const agentNumber = giveIdTakeInputValue("cashout-number");
    if (agentNumber.length !== 11) {
      alert("Invalid Phone Number");
      return;
    }

    // 2- Get the amount, validate, convert to number
    const casoutAmount = Number(giveIdTakeInputValue("cashout-amount"));

    // 3- Get the current balance
    balance = getBalance();

    // 4- Calculate new balance
    let newBalance = Number(balance) - Number(casoutAmount);
    // 4-1- New balance validation
    if (newBalance < 0) {
      alert("You do not have sufficient balance");
      return;
    }

    // 5- Get the password and verify
    const cashoutPassword = giveIdTakeInputValue("cashout-password");
    console.log("Password:", cashoutPassword);

    // 5-1 true:: show an alert and set new balance
    if (cashoutPassword == "1234") {
      const d = new Date();
      const date = d.toLocaleDateString("en-GB");
      const time = d.toLocaleTimeString("en-GB");

      alert(`Cashout successful at ${time} on ${date} ✅`);
      setBalance(newBalance);

      // 5-1-1- save the transaction history to transactions
      // 5-1-2- get the transitions-cards-container
      const parent = document.getElementById("transitions-cards-container");

      // 5-1-3- create new div
      const newDiv = document.createElement("div");

      // 5-1-4- inserting infos into the div by changing innerHTMl
      newDiv.innerHTML = `
        <div class="p-5 bg-base-200 ">
            <img src="./assets/opt-2.png" alt="">
            <p class="font-bold text-xl">Cash out</p>
            Agent Number = ${agentNumber} <br>
            Amount = <span class="text-red-500"> -${casoutAmount} Taka</span><br>
            Time = ${time}<br>
            Date = ${date}<br>
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

// Hide all forms just when browser is loaded.
document.addEventListener("DOMContentLoaded", function () {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const transferMoney = document.getElementById("transfer-money");
  const transactions = document.getElementById("transactions");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transferMoney.classList.add("hidden");
  transactions.classList.add("hidden");
});
