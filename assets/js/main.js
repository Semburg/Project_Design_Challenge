

// ***************************
//*      Lightweight mail validation          
// ***************************

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//*    test passed
////     check 1
////console.log(validateEmail('anystring@anystring.anystring'))

// ***************************
//*      Function for Email confirmation with email validation      
// ***************************

function subscribeConfirmation(){
    let getEmail = document.getElementById("emailHTML").value;
    let validMail = validateEmail(getEmail)

    if(!validMail){


        document.getElementById("emailHTML").value="";
        document.getElementsByName('Email')[0].placeholder='Please, enter valid email';

//*         Test passed
        ////     check 1
      console.log("Email is not valid")

    } else {


//*         Test passed
// // !    CHECK 3
// //        console.log("Mail IS Valid")

        
         document.getElementById("signForm").style.display = "none"
        document.getElementById("after-confirm").style.display = "flex";




        //!         line below is the call for SECOND EDITION -   please uncomment if needed
        // *                         UNDER CONSTRUCTION


        // document.getElementById("top-side").style.display = "none";
        // document.getElementById("main-side").style.display = "none";
        // document.getElementById("white-page").style.display = "flex";

    }

// !    CHECK 4
    console.log(getEmail)
}  
