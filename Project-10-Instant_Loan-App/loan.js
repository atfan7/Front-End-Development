const check =() => {

    const username =document.getElementById("username").value;
    const cibil =document.getElementById("cibil").value;
    const salary =document.getElementById("salary").value;
    const status=document.getElementById("status");

    const loanImg =document.getElementById("loanImg");
    
    let loanAmount = 0;

    if(cibil >800 && salary >=60000){
        loanAmount="20 Lakhs"
    }

    else if(cibil >780 && salary >=50000){
        loanAmount="15 Lakhs"
    }

    else if(cibil >750 && salary >=40000){
        loanAmount="10 Lakhs"
    }

    else if(cibil >720 && salary >=30000){
        loanAmount="5 Lakhs"
    }

    else {
        loanAmount=0;
    }
    
    //status 
    if(loanAmount ===0){
        status.textContent=`Sorry ${username} , You are Not Eligible for any loan`;
        status.style.color="red";
        loanImg.src='assets/reject.jpg';
    }

    else{
        status.innerHTML=`<br> Congratulations ${username} , You are Eligible for loan upto ${loanAmount}
        <button class="btn btn-success rounded-5" data-bs-toggle="modal" data-bs-target="#loanModal" " >Apply Now</button>`;
        status.style.color="green";
        loanImg.src='assets/success1.jpg';

    }


}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("cibil").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("status").textContent = "Your Status will be displayed here";
    document.getElementById("status").style.color = "black";
    document.getElementById("loanImg").src = "assets/img1.png";
}



const validate =() => {
    const username=document.contact.username.value;
    const nameError = document.getElementById("nameError");

    const email =document.contact.email.value;
    const emailError =document.getElementById("emailError")

    const mobile=document.contact.mobile.value;
    const mobileError =document.getElementById("mobileError");

    const amount=document.contact.amount.value;
    const loanError =document.getElementById("loanError")





    let nameStatus= false;
    let mobileStatus=false;
    let amountStatus=false;

    let emailStatus=false;


    const alphaExp =/^[a-zA-Z\s]+$/ ;
    const numExp =/^[0-9]+$/ ;
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    //Name Validation

    if(username === ""){
        nameError.textContent="Full Name is Mandatory"
    }
    else{
        if(username.match(alphaExp)) {
            nameError.textContent="";
            nameStatus=true;

        }

        else{
            nameError.textContent ="Name should be in alphabetics"
        }
    }





   //Email validation

   if(email === "")
   {
    emailError.textContent ="Email address is mandatory";


   }

   else{
     if(email.match(emailExp)) {
        emailError.textContent ="";
        emailStatus=true;

        
     }
     else {
        emailError.textContent ="Please write a valid email address";
     }

   }




   //Mobile Number Validation

   if(mobile === ""){
    mobileError.textContent="Mobile Number is Mandatory";
   }
   else {

    if(mobile.match(numExp)) {
        if(mobile.length==10){
            mobileError.textContent="";
            mobileStatus=true;

        }
        else{
            mobileError.textContent="Mobile number should be 10 digits long";

        }

    }
    else {
         mobileError.textContent="Mobile number should be in numerics";

    }


    
   }  


   // Loan Amount Validation

   if(amount=== ""){
    loanError.textContent="Loan Amount cannot be empty";


   }
   else {
    if(amount.match(numExp)){
        loanError.textContent="";
        amountStatus=true;

    }
    else {
        loanError.textContent="Loan Amount should be a positive number";

    }


   }





    //return logic
    if(nameStatus && mobileStatus && amountStatus && emailStatus) {
        return true;
    }
    else{
        return false;
    }
    
}
