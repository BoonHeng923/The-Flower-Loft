console.log("Enter Email: " + document.getElementById("email").value)
console.log("Enter Password: " + document.getElementById("password").value)
console.log("First name: "+ document.getElementById("fname").value)
console.log("Last name: " + document.getElementById("lname").value)
console.log("Confirm Password: " + document.getElementById("confirm_password").value)
function validateLoginForm(){
    var x = document.forms["loginForm"]["email"].value; 
    if (x == ""){
        alert("Email must be filled!")
        return false;
    }
    var y = document.forms["loginForm"]["password"].value;
    if (y == ""){
        alert("Password must be filled!")
        return false;
    }
    if ((x & y) != null){                
        alert("Congratulations! You have successfully logged in! :)")
        return true;
    }

}

function validateSignupForm(){
    var a = document.forms["signupForm"]["fname"].value;
    if (a == ""){
        alert("First name must be filled!")
        return false;
    }

    var b = document.forms["signupForm"]["lname"].value;
    if (b == ""){
        alert("Last name must be filled!")
        return false;
    }

    var c = document.forms["signupForm"]["email"].value;
    if (c == ""){
        alert("Email must be filled!")
        return false;
    }

    var d = document.forms["signupForm"]["password"].value;
    if (d == ""){
        alert("Password must be filled!")
        return false;
    }

    var e = document.forms["signupForm"]["confirm_password"].value;
    if (e == ""){
        alert("Confirm Password must be filled!")
        return false;
    }
    
    if((a&b&c&d&e) != null){
        alert("Congratulations! You have successfully signed up!")
        return true;
    }
}   

function check(){
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('passwordmessage').innerHTML = '';
    } 
    else {
        document.getElementById('passwordmessage').style.color = 'red';
        document.getElementById('passwordmessage').innerHTML = 'Password does not match';
    }
}

