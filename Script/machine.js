
// takes id and returns input value
function giveIdTakeInputValue(id){
   const inputValue = document.getElementById(id).value;
   return inputValue;
}

// Current Balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText ;
    return Number(balance);
}

// set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// Showing form when button is clicked
function showUpById(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const showup = document.getElementById(id);

    addMoney.classList.add("hidden")
    cashout.classList.add("hidden")
    showup.classList.remove("hidden");

}