function guardarNombre() {
    let nombre = document.getElementById("nombre");

    localStorage.setItem("nombre", nombre.value);
}

function guardarApellido() {
    let apellido = document.getElementById("apellido");

    localStorage.setItem("apellido", apellido.value);
}

function guardarDNI() {
    let dni = document.getElementById("DNI");

    localStorage.setItem("DNI", dni.value);
}

function saveUsername() {
    let username = document.getElementById("userName");

    localStorage.setItem("userName", username.value);
}

function savePassword() {
    let password = document.getElementById("pass").value;    
    let password2 = document.getElementById("pass2").value;

    if (password === password2) {
        let pass = document.getElementById("pass").value; 
        console.log("Las contraseñas coinciden "+pass);
        localStorage.setItem("password", pass);
        window.location.href = "register-5.html";
    }else{
        alert("Las contraseñas no coinciden");
    }  
}

function saveTel() {
    let tel = document.getElementById("tel");

    localStorage.setItem("tel", tel.value);
}

function createUser() {
    let nombre = localStorage.getItem("nombre");
    let apellido = localStorage.getItem("apellido");
    let dni = localStorage.getItem("DNI");
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
    let tel = localStorage.getItem("tel");

    let user = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        username: username,
        password: password,
        tel: tel
    };

    localStorage.setItem("user", JSON.stringify(user));
}
