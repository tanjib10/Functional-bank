
document.getElementById('btn-deposit').addEventListener('click',function(){
  const newDeposit = getInputById('deposit-field');
     if (isNaN(newDeposit)) {
   alert("please input a valid amount")
   return;
    }
  const previousDeposit = getElementFieldById('deposit-total');
  const totalDeposit = newDeposit + previousDeposit;
  setElementById('deposit-total',totalDeposit);
  const balanceTotal = getElementFieldById('balance-total');
  const balanceTotalAmount = balanceTotal + newDeposit;
  setElementById('balance-total', balanceTotalAmount);
})