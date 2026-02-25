
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