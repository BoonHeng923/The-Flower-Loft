const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('submitted')){
    document.getElementById('formContainer').classList.add('submitted');
}

function showModal() {
    if (validateEmail() && validatePhoneNumber()) {
        document.getElementById('successModal').style.display = 'block';
        document.getElementById('contactForm').reset();
    } else {
        alert('Please enter a valid email address and phone number.');
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
    var phonePattern = /^\+601\d{1}\s\d{3}\s\d{4}$/;

    if (!phonePattern.test(phoneValue)) {
        phoneInput.style.borderColor = "red";
        return false;
    } else {
        phoneInput.style.borderColor = "";
        return true;
    }
}