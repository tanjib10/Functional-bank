document.getElementById('withdraw-btn').addEventListener('click',function(){
   const newWithdraw = getInputById('withdraw-field');
     if (isNaN(newWithdraw)) {
   alert("please input a valid amount")
   return;
    }

   const balanceTotal = getElementFieldById('balance-total');
   if(newWithdraw > balanceTotal) {
      alert("you dont have sufficient money")
      return;
   }else{
      const previousWithdraw = getElementFieldById('withdraw-total');
   const totalWithdraw = previousWithdraw + newWithdraw;
   setElementById('withdraw-total',totalWithdraw);
  const balanceTotalAmount = balanceTotal - newWithdraw;
  setElementById('balance-total', balanceTotalAmount);
   }
})