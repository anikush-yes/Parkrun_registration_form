document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let isValid = true;
    clearErrors();


    const firstName = document.getElementById("firstName").value;
    const nameRegex = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]{3,30}$/;
    if (!nameRegex.test(firstName)) {
        isValid = false;
        document.getElementById("firstNameError").textContent = "The name must contain only letters and be between 3 and 30 characters long";
    }

    
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent = "Enter a valid email postal address";
    }

   
    const age = document.getElementById("age").value;
    const birthDate = new Date(age);
    const today = new Date();
    const ageYears = today.getFullYear() - birthDate.getFullYear();
    if (ageYears < 18 || ageYears > 120) {
        isValid = false;
        document.getElementById("ageError").textContent = "You must be at least 18 years old";
    }

    
    const gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").textContent = "Select gender";
        isValid = false;
    }


    const phone = document.getElementById("phone").value;
const phoneRegex = /^\+\d{11}$/; 
if (!phoneRegex.test(phone)) {
    isValid = false;
    document.getElementById("phoneError").textContent = "The phone number must be in the format +xxxxxxxxxxx";
}
    
    const password = document.getElementById("password").value;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\[\]{};':"\\|,.<>\/?`~^_-])[A-Za-z\d!@#$%^&*()\[\]{};':"\\|,.<>\/?`~^_-]{8,}$/;

if (!passwordRegex.test(password)) {
    isValid = false;
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters long, with an uppercase letter, a lowercase letter, a number and a special character.";
}

    
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
    }

    
     if (isValid) {
        showModal();
        document.getElementById("registrationForm").reset(); 
    }
});


function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
        element.textContent = "";
    });
}


function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    
    
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}