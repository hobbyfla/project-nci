function myFunction(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let at=email.indexOf("@");
    let phone=document.getElementById("phone").value;
    let subject=document.getElementById("subject").value;
    let submitOK=true;
   
    if (name.length > 20){
        alert("The name may have no more than 20 characters");
        submitOK=false;
    }
    if (name.length == 0){
        alert("The name field is required, please enter your name");
        submitOK=false;
    }
    if(phone.length == 0){
        alert("The phone field is required, please enter correct phone number");
        submitOK=false;
    }
    else if(phone.length!=10){
        alert("The phone number must be 10 digets long.")
        submitOK=false;
    }
    else{
        // checking if every variable is a digit, including 0
        let phoneNum=true;
        for (let i=0; i<phone.length;i++){// using for loop to traverse the phone number and check if the char is a digit - using .charCodeAt(i) to get the ASCII code for the characters
            if(phone.charCodeAt(i)< 48 || phone.charCodeAt(i)>57){
                phoneNum=false;// if it is not a digit the variable is set to false
                break;
            }
        }
        if(!phoneNum){
            alert("Please enter a valid phone number");
            submitOK=false;
        }
    }
    if (at == -1){
        alert("Not a valid e-mail!");
        submitOK=false;
    }
    if (!submitOK){
        return false;
    }

    alert(name+ " thank you for your details. We will be in touch via "+ email+ " shortly.");
    
    hide(); // colling the hide function 

    return false; // preventing the page to refresh
}

function hide(){
    document.getElementById("myForm").style.display="none"; 
 }