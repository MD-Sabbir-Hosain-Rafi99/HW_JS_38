let ammountInput = document.getElementById('ammountInput');
let addMoneyPin = document.getElementById('addMoneyPin');
let addMoneyBtn = document.getElementById('addMoneyBtn');
let cashOutBtn = document.getElementById('cashOutBtn');
let currentBalance = document.getElementById('currentBalance');

// ============= Add Money =============
addMoneyBtn.addEventListener('click', () => {
    if (addMoneyPin.value == 2000) {
        let currentBalanceValue = parseFloat(currentBalance.innerText);
        let ammountInputValue = parseFloat(ammountInput.value);
        let updateTotalBalance = ammountInputValue + currentBalanceValue
        currentBalance.innerText = updateTotalBalance;
        ammountInput.value = "";
        addMoneyPin.value = "";
    } else {
        alert("Pin Vul Hoice Vai!")
    }
})
// ============= Add Money =============

// ============= Cash Out =============
cashOutBtn.addEventListener('click', () => {
    if (addMoneyPin.value == 2000) {
        if (currentBalance.innerText < ammountInput.value) {
            let currentBalanceValue = parseFloat(currentBalance.innerText);
            let ammountInputValue = parseFloat(ammountInput.value);
            let afterCashOutBalance = currentBalanceValue - ammountInputValue;
            currentBalance.innerText = afterCashOutBalance;
            alert(`Cash Out ${currentBalance.innerText} Taka Sucessfully Done.`)
        }else{
            alert("50 Taka Add Rakhty Hobe!");
        }
    } else {
        alert("Pin Vul Hoice Vai!")
    }
})
// ============= Cash Out =============