var names = document.getElementById('userName');
var passwords = document.getElementById('password');

window.onload = function savedCredencials() {
    let currentUserName = sessionStorage.getItem('userName');
    let currentPassword = sessionStorage.getItem('password');
    let userName = document.getElementsByClassName("userName");
    let password = document.getElementsByClassName("password");

    for (let i = 0; i < userName.length; i++) {
        userName[i].value = currentUserName;
    }
    for (let i = 0; i < password.length; i++) {
        password[i].value = currentPassword;
    }
}

function savedCredencials() {
    let currentUserName = sessionStorage.getItem('userName');
    let currentPassword = sessionStorage.getItem('password');
    let userName = document.getElementsByClassName("userName");
    let password = document.getElementsByClassName("password");

    for (let i = 0; i < userName.length; i++) {
        userName[i].value = currentUserName;
    }
    for (let i = 0; i < password.length; i++) {
        password[i].value = currentPassword;
    }
}

names.forEach(function (el) {
    el.value = getSavedNameValue(el.userName);
})

passwords.forEach(function (el2) {
    el2.value = getSavedPassValue(el2.password);
})


function saveNameValue(e) {
    let nameVal = e.target.value;
    sessionStorage.setItem('userName', nameVal);
}

function savePassValue(e) {
    let passVal = e.target.value;
    sessionStorage.setItem('password', passVal);
}

function getSavedNameValue() {
    if (!sessionStorage.getItem('userName')) {
        saveNameValue();
    } else {
        savedCredencials();
        return sessionStorage.getItem('userName');
    }
}

function getSavedPassValue() {
    if (!sessionStorage.getItem('password')) {
        saveNameValue();
    } else {
        savedCredencials();
        return sessionStorage.getItem('password');
    }
}


