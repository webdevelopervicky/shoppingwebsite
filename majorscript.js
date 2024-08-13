document.addEventListener('DOMContentLoaded', () => {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const quantityInputs = document.querySelectorAll('.quantity');

    function updateQuantity(inputElement, delta) {
        let currentQuantity = parseInt(inputElement.value);
        if (currentQuantity + delta >= 1) {
            inputElement.value = currentQuantity + delta;
        }
    }

    incrementButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const quantityInput = btn.closest('.cart-item').querySelector('.quantity');
            if (quantityInput) {
                updateQuantity(quantityInput, 1);
            }
        });
    });

    decrementButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const quantityInput = btn.closest('.cart-item').querySelector('.quantity');
            if (quantityInput) {
                updateQuantity(quantityInput, -1);
            }
        });
    });
});


  //---------cart-----------//

const removeBtns = document.querySelectorAll(".btnremove");
removeBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
        const tr = this.closest('tr');
        if (tr) {
            tr.remove();
        }
    });
});


//----------------form valitation-------------------//

const form = document.getElementById("form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const mail = document.getElementById("mail");
const number = document.getElementById("number");
const company = document.getElementById("company");
const address = document.getElementById("address");
const country = document.getElementById("Country"); 
const state = document.getElementById("browsersInput");
const city = document.getElementById("city");
const postcode = document.getElementById("postcode");


function checkRequired(inputs) {
    let isValid = true; 
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            errorinput(input, "");
            isValid = false;
        } else {
            successinput(input);
        }
    });
    return isValid; 
}


function validateNumber() {
    if (number.value.length < 10) { 
        errorinput(number, "Number must be at least 10 digits.");
        return false;
    } else {
        successinput(number);
        return true;
    }
}


function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(mail.value)) {
        errorinput(mail, "Please enter a valid email address.");
        return false;
    } else {
        successinput(mail);
        return true;
    }
}


function errorinput(input, message) {
    const formsg = input.parentElement;
    formsg.className = "forms error";
    
   
    let errorMsg = formsg.querySelector(".error-message");
    if (!errorMsg) {
        errorMsg = document.createElement("span");
        errorMsg.className = "error-message";
        formsg.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
}


function successinput(input) {
    const formsg = input.parentElement;
    formsg.className = "forms success1";
    
 
    const errorMsg = formsg.querySelector(".error-message");
    if (errorMsg) {
        errorMsg.remove();
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const allInputsValid = checkRequired([firstname, lastname, mail, number, company, address, country, state, city, postcode]);
    

    const emailValid = validateEmail();
    const numberValid = validateNumber();
    
    if (allInputsValid && emailValid && numberValid) {
        console.log("Form submitted successfully.");
        form.reset();
    } else {
        console.log("Form has errors.");
    }
});
