// all inputs
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var signupName=document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signUp = [];

if (localStorage.getItem('login') == null) {
    signUp = []
} else {
    signUp = JSON.parse(localStorage.getItem('login'))
}

// Singup
function sign() {
   
    var signup = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }

    if (signUp.length == 0) {
        signUp.push(signup)
        localStorage.setItem('login', JSON.stringify(signUp))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }

    function exist() {
        for (var i = 0; i < signUp.length; i++) {
            if (signUp[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
                return false
            }
        }
    }
    if (exist() == false) {
        document.getElementById('exist').innerHTML = '<span class=" m-3 text-center fs-5">Email already exists.......please try another one</span>'

    } else {
        signUp.push(signup)
        localStorage.setItem('login', JSON.stringify(signUp))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3 fs-3">Success</span>'

    }

    function empty() {
        if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
              return false
          } else {
              return true
          }
      }

    if (empty() == false) {
        document.getElementById('exist').innerHTML = '<span class="m-3 fs-5">The inputs all is required!</span>'
        return false
    }
  
}


   
   
   
   
// Login
function login() {
    function logempty() {
        if (signinPassword.value == "" || signinEmail.value == "") {
               return false
           } else {
               return true
           }
       } 
       if (logempty() == false) {
        document.getElementById('wrong').innerHTML = '<span class="m-3 text-center fs-5"> The inputs all is required!</span>'
        return false
    } 
    var pass = signinPassword.value
    var mail = signinEmail.value

    for (var i = 0; i < signUp.length; i++) {
        if (signUp[i].email.toLowerCase() == mail.toLowerCase() && signUp[i].password.toLowerCase() == pass.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUp[i].name)
           window.location.assign("home.html")
        } else {
            document.getElementById('wrong').innerHTML = '<span class="p-2 text-center fs-5">Incorrect email or password...please try one more time</span>'
        }
    }   
  
}

function logout() {
    localStorage.removeItem('sessionUsername')
}

var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('name').innerHTML = "Welcome " + username
}