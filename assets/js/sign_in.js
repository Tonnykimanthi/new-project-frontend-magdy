const sign = document.querySelector("#sign");
const signInId = document.querySelector("#signInId");
const firstSignUp = document.querySelector("#SignUpId");
const over = document.querySelector("#over");
const diff = document.querySelector("#diff");
const signup = document.querySelector("#signup");
const forget = document.querySelector("#forget");
const medgulfSignin = document.querySelector("#medgulfSignin");
const TragsSignin = document.querySelector("#TragsSignin");
const EngineeringSignin = document.querySelector("#EngineeringSignin");
const forgetFirst = document.querySelector("#forgetFirst");
const forgetSec = document.querySelector("#forgetSec");
const forgetThir = document.querySelector("#forgetThir");
const checkD = document.querySelector("#checkD");
const buttonProcced = document.querySelector("#buttonProcced");
const firSignUp = document.querySelector("#firstSignUp");
const secSignUp = document.querySelector("#secondSignUp");
const thrSignUp = document.querySelector("#threeSignUp");
const logos = document.querySelectorAll(".logoscom");


function toggle(){
    sign.classList.toggle("active");
    over.classList.toggle("active");
};
function medgulfSignIn(){
    diff.classList.toggle("active");
    medgulfSignin.classList.toggle("active");
};
function TragsSignIn(){
    diff.classList.toggle("active");
    TragsSignin.classList.toggle("active");
};
function EngineeringSignIn(){
    diff.classList.toggle("active");
    EngineeringSignin.classList.toggle("active");
};
function SignIn(){
    signInId.classList.add("active");
    SignUpId.classList.remove("active");
    firSignUp.classList.remove("active");
    secSignUp.classList.remove("active");
    thrSignUp.classList.remove("active");
    diff.classList.remove("active");
    signup.classList.remove("active");
    forget.classList.remove("active");
    medgulfSignin.classList.remove("active");
    TragsSignin.classList.remove("active");
    EngineeringSignin.classList.remove("active");
};
function SignUp(){
    signInId.classList.remove("active");
    SignUpId.classList.add("active");
    firSignUp.classList.add("active");
    secSignUp.classList.remove("active");
    thrSignUp.classList.remove("active");
    diff.classList.add("active");
    signup.classList.add("active");
    medgulfSignin.classList.remove("active");
    TragsSignin.classList.remove("active");
    EngineeringSignin.classList.remove("active");
};
function forgetPass(){
    forget.classList.add("active");
    diff.classList.add("active");
    forgetFirst.classList.add("active");
    medgulfSignin.classList.remove("active");
    TragsSignin.classList.remove("active");
    EngineeringSignin.classList.remove("active");
};
function toggleForgetFirst(){
    forgetFirst.classList.remove("active");
    forgetSec.classList.add("active");          
    forgetThir.classList.remove("active");
};
function toggleForgetSec(){
    forgetFirst.classList.remove("active");
    forgetSec.classList.remove("active");          
    forgetThir.classList.add("active");
};
function toggleForgetThir(){
    diff.classList.remove("active");
    forget.classList.remove("active");
    forgetFirst.classList.remove("active");
    forgetSec.classList.remove("active");          
    forgetThir.classList.remove("active");
};
checkD.addEventListener("change", () => {
    if (checkD.checked) {
        buttonProcced.classList.add("active");
    } else {
        buttonProcced.classList.remove("active");
    }
});
function Procced(){
    firSignUp.classList.remove("active");
    secSignUp.classList.add("active");
    thrSignUp.classList.remove("active");
}
function SignUpWait(){
    firSignUp.classList.remove("active");
    secSignUp.classList.remove("active");
    thrSignUp.classList.add("active");
}
logos.forEach(logo => {
    logo.addEventListener("click", () => {
        logos.forEach(e => e.classList.remove("active"));
        logo.classList.add("active");
    });
});

const btnForm1 = document.querySelector(".btnForm1");
const btnForm2 = document.querySelector(".btnForm2");
const btnForm3 = document.querySelector(".btnForm3");

const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");

const btnn1 = document.querySelector(".btnn1");
const btnn2 = document.querySelector(".btnn2");
const btnn3 = document.querySelector(".btnn3");

const formlogo1Inputs = document.querySelectorAll(".formlogo1 input");
const formlogo2Inputs = document.querySelectorAll(".formlogo2 input");
const formlogo3Inputs = document.querySelectorAll(".formlogo3 input");

function validateForm(inputs, errorElement, formElement ,btnElement) {
    let isFormValid = true;

    inputs.forEach(input => {
        if (input.value === "") {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        errorElement.classList.add("errorr");
        formElement.classList.add("errorr");
        btnElement.classList.add("errorr");
    } else {
        errorElement.classList.remove("errorr");
        formElement.classList.remove("errorr");
        btnElement.classList.remove("errorr");
    }
}

btnForm1.addEventListener("click", () => {
    validateForm(formlogo1Inputs, error1, document.querySelector(".formlogo1"), btnn1);
});

btnForm2.addEventListener("click", () => {
    validateForm(formlogo2Inputs, error2, document.querySelector(".formlogo2"), btnn2);
});

btnForm3.addEventListener("click", () => {
    validateForm(formlogo3Inputs, error3, document.querySelector(".formlogo3"), btnn3);
});

const fileInput = document.querySelector("#myFile");
const faCheck = document.querySelector("#checkup");
const faUpload = document.querySelector("#upload");

fileInput.addEventListener('change', function() {
    const file = this.files[0]; 
    console.log("File selected:", file); // تتبع الملف المختار
    if (file) {
        faUpload.classList.remove("active"); 
        faCheck.classList.add("active");
    } else {
        faUpload.classList.add("active");
        faCheck.classList.remove("active");
    }
});

function togglePasswordVisibility(passwordField, openIcon, closeIcon) {
    openIcon.addEventListener("click", function() {
        passwordField.type = "text";  // Show password
        closeIcon.classList.add("active");
        openIcon.classList.remove("active");
    });

    closeIcon.addEventListener("click", function() {
        passwordField.type = "password";  // Hide password
        openIcon.classList.add("active");
        closeIcon.classList.remove("active");
    });
}

const PasswordMedgulf = document.getElementById("PasswordMedgulf");
const openEyeMedgulf = document.getElementById("openEyeMedgulf");
const closeEyeMedgulf = document.getElementById("closeEyeMedgulf");

const PasswordTrags = document.getElementById("PasswordTrags");
const openEyeTrags = document.getElementById("openEyeTrags");
const closeEyeTrags = document.getElementById("closeEyeTrags");

const PasswordEngineering = document.getElementById("PasswordEngineering");
const openEyeEngineering = document.getElementById("openEyeEngineering");
const closeEyeEngineering = document.getElementById("closeEyeEngineering");

// Apply the function for each set of password fields and icons
togglePasswordVisibility(PasswordMedgulf, openEyeMedgulf, closeEyeMedgulf);
togglePasswordVisibility(PasswordTrags, openEyeTrags, closeEyeTrags);
togglePasswordVisibility(PasswordEngineering, openEyeEngineering, closeEyeEngineering);


