const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

// User Management
// Sign Up Forms
const form = document.getElementById("align");
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email-address');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm-pass');
const errorMsg = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let somethingIDK = new Array();
    if (firstName.value === '' || firstName.value == null) {
        firstName.style.setProperty('border', '2px solid red');
        somethingIDK.push('Please enter your First Name')
    }    

    if (lastName.value === "" || lastName.value == null) {
        lastName.style.setProperty('border', '2px solid red');
        somethingIDK.push('Please enter your Last Name');
    }

    const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    if (!emailValid.test(emailAddress.value)) {
        emailAddress.style.setProperty('border', '2px solid red');
        somethingIDK.push('Please enter a valid Email')
    } 
    
    if (password.value.length <= 6) {
        password.style.setProperty("border", "2px solid red");
        somethingIDK.push('Password must be longer than 6 characters')
    }
    
    if (confirm.value !== password.value) {
        confirm.style.setProperty("border", "2px solid red");
        password.style.setProperty("border", "2px solid red");
        somethingIDK.push("Password and confirmation password don't match");
    }
    
    if (somethingIDK.length > 0) {
        e.preventDefault();
        errorMsg.innerText = somethingIDK.join(', ');
    }
})

function showPass() {
    let pass = document.getElementById("password");
    let passConfirm = document.getElementById("confirm-pass");
    if (pass.type === "password" || passConfirm === "confirm-pass") {
        pass.type = "text";
        passConfirm.type = "text";
    } else {
        pass.type = "password";
        passConfirm.type = "password";
    }
}

// document.getElementById("submit").addEventListener("click", function(event) {
//     checkSignUp();
//     event.preventDefault();
// })
// ?????????????????????/WHY ARE WE MAKING ARRAYS NOOOOo
// let somethingIDK = new Array();
// I DONT KNOW THIS
// FVBDHVSKSNLS;FEF;OFEJIFEFJFNENenefhefefhefh
// We should submit: it like int (this fbfefeffe)
// Yes....


// Code Resource Links:
// https://www.codespot.org/javascript-email-validation/
// https://www.w3schools.com/howto/howto_css_searchbar.asp
