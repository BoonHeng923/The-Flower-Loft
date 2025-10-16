const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('submitted')) {
    document.getElementById('formContainer').classList.add('submitted');
}

function showModal() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneNumberValid = validatePhoneNumber();

    if (isNameValid && isEmailValid && isPhoneNumberValid) {
        document.getElementById('successModal').style.display = 'block';
        document.getElementById('contactForm').reset();
    } else {
        if (!isNameValid) {
            alert('Please enter a valid name (letters only).');
        }
        if (!isEmailValid) {
            alert('Please enter a valid email address.');
        }
        if (!isPhoneNumberValid) {
            alert('Please enter a valid phone number.');
        }
    }
    return false; 
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function validateName() {
    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value;
    var namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(nameValue)) {
        nameInput.style.borderColor = "red";
        return false;
    } else {
        nameInput.style.borderColor = "";
        return true;
    }
}

function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        emailInput.style.borderColor = "red";
        return false;
    } else {
        emailInput.style.borderColor = "";
        return true;
    }
}

function validatePhoneNumber() {
    var phoneInput = document.getElementById('contactNumber');
    var phoneValue = phoneInput.value;
    var phonePattern = /^\+601\d{8,9}$/;

    if (!phonePattern.test(phoneValue)) {
        phoneInput.style.borderColor = "red";
        return false;
    } else {
        phoneInput.style.borderColor = "";
        return true;
    }
}
