let amount=document.getElementById("amount");
let percentage=document.getElementById("percentage");
let tipamount=document.getElementById("tipamount");
let total=document.getElementById("total");
let para=document.getElementById("para");

function clickButton(){
    let a=amount.value;
    let p=percentage.value;
    
    if(a===""){
         para.textContent="Please Enter a Valid Input";
         para.style.color="red";
    }
    else if(p===""){
          para.textContent="Please Enter a Valid Input";
          para.style.color="red";
    }
    else
    {
        let ans1=((parseInt(a)/100)*parseInt(p));
        let ans2=ans1+parseInt(a);
    
        tipamount.value=ans1;

        total.value=ans2;
        
        para.textContent="";

    }
}
