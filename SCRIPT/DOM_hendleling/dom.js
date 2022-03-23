let myMsg = "WELCOME MY_WORLD";
let myCnt = 0;
let mymy = "Are You Ready ???"
let mymycnc = 0;
function myFunc() {
   document.myForm.myFormMsg.value = myMsg.substring(0, myCnt) + "_";
   document.myForm.myFormMsg.value = mymy.substr(0, mymycnc) + "|";
   mymycnc = ( mymycnc == mymy.length ) ? 0 : mymycnc+1;
   myCnt = ( myCnt == myMsg.length ) ? 0 : myCnt+1;
}

setInterval("myFunc()", 100);
setInterval("mymyff()", 100);
