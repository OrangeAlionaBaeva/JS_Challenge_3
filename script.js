 const calcTip = () => {
     let clientCheck = document.getElementById("clientCheckValue").value;
     document.getElementById('clientCheckValuePrint').innerHTML = `${clientCheck} $`;

     let clientCheckSecond = document.getElementById("clientCheckValueSecond").value;
     document.getElementById('clientCheckValuePrintSecond').innerHTML = `${clientCheckSecond} $`;

     let clientCheckThird = document.getElementById("clientCheckValueThird").value;
     document.getElementById('clientCheckValuePrintTrird').innerHTML = `${clientCheckThird} $`;

     let tip15persent;
     let tip20persent;
     let tips1;
     let tips2;
     let tips3;


     if (clientCheck >= 50 || clientCheck <= 300) {
         tip15persent = clientCheck * 15 / 100;

         document.getElementById('stevenTips').innerHTML = `${tip15persent} $`;

         let total = +clientCheck + +tip15persent;
         document.getElementById('totalPrice').innerHTML = `${total} $`
         tips1 = tip15persent;

     } else {
         tip20persent = clientCheck * 20 / 100;
         document.getElementById('stevenTips').innerHTML = `${tip20persent} $`;
         let total = +clientCheck + +tip20persent;
         document.getElementById('totalPrice').innerHTML = `${total} $`
         tips1 = tip20persent;
     }



     if (clientCheckSecond >= 50 || clientCheckSecond <= 300) {
         tip15persent = clientCheckSecond * 15 / 100;
         document.getElementById('stevenTipsSecond').innerHTML = `${tip15persent} $`;
         let total = +clientCheckSecond + +tip15persent;
         document.getElementById('totalPriceSecond').innerHTML = `${total} $`
         tips2 = tip15persent;

     } else {
         tip20persent = clientCheckSecond * 20 / 100;
         document.getElementById('stevenTipsSecond').innerHTML = `${tip20persent} $`;
         let total = +clientCheckSecond + +tip15persent;
         document.getElementById('totalPriceSecond').innerHTML = `${total} $`
         tips2 = tip20persent;
     }


     if (clientCheckThird >= 50 || clientCheckThird <= 300) {
         tip15persent = clientCheckThird * 15 / 100;
         document.getElementById('stevenTipsThird').innerHTML = `${tip15persent} $`;
         let total = +clientCheckThird + +tip15persent;
         document.getElementById('totalPriceThird').innerHTML = `${total} $`
         tips3 = tip15persent;

     } else {
         tip20persent = clientCheckThird * 20 / 100;
         document.getElementById('stevenTipsThird').innerHTML = `${tip20persent} $`;
         let total = +clientCheckThird + +tip15persent;
         document.getElementById('totalPriceThird').innerHTML = `${total} $`
         tips3 = tip20persent;
     }

     let totalStevenTips;
     totalStevenTips = +tips1 + +tips2 + +tips3;
     totalStevenTips = parseInt(totalStevenTips * 100) / 100;
     document.getElementById('stevenTipsTotal').innerHTML = `${totalStevenTips} $`;

     const bills = [+clientCheck, +clientCheckSecond, +clientCheckThird];
     console.log(bills);
     const stevenTips = [tips1, tips2, tips3];
     console.log(stevenTips);
     const total = [bills[0] + stevenTips[0], bills[1] + stevenTips[1], bills[2] + stevenTips[2]];
     console.log(total);
 }

 function myFunctionRefresh() {
     clientCheck = document.getElementById("clientCheckValue").value = '';
     clientCheckSecond = document.getElementById("clientCheckValueSecond").value = '';
     clientCheckThird = document.getElementById("clientCheckValueThird").value = '';

     document.getElementById('clientCheckValuePrint').innerHTML = ``;
     document.getElementById('stevenTips').innerHTML = ``;
     document.getElementById('totalPrice').innerHTML = ``;

     document.getElementById('clientCheckValuePrintSecond').innerHTML = ``;
     document.getElementById('stevenTipsSecond').innerHTML = ``;
     document.getElementById('totalPriceSecond').innerHTML = ``

     document.getElementById('clientCheckValuePrintTrird').innerHTML = ``;
     document.getElementById('stevenTipsThird').innerHTML = ``;
     document.getElementById('totalPriceThird').innerHTML = ``;

     document.getElementById('stevenTipsTotal').innerHTML = ``;
 }