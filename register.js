function guardarNombre() {

    try {
    let nombre = document.getElementById("nombre");

    localStorage.setItem("nombre", nombre.value);
    console.log("Guardado");
    } catch (e) {
        console.log(e);
    }
    
}

function guardarApellido() {

    try {
    let apellido = document.getElementById("apellido");

    localStorage.setItem("apellido", apellido.value.JSON.stringify);

    window.alert("El apellido se guardo");

    console.log("El apellido se guardo");}
    catch (e) {
        console.log(e);
    }
}

function guardarMail(){
    try {
    let mail = document.getElementById("mail");

    localStorage.setItem("mail", mail.value);
    console.log("El mail se guardo");
    }
    catch (e) {
        console.log(e);
    }
}

function saveUsername() {

    try {
    let username = document.getElementById("userName");

    localStorage.setItem("userName", username.value);
    console.log("El usuario se guardo");
    } catch (e) {
        console.log(e);
    }
}

function savePassword() {
    let password = document.getElementById("pass").value;    
    let password2 = document.getElementById("pass2").value;

    try {
    if (password === password2) {
        let pass = document.getElementById("pass").value; 
        console.log("Las contraseñas coinciden "+pass);
        localStorage.setItem("password", pass);
        console.log("El password se guardo");
        window.location.href = "register-5.html";
    }else{
        alert("Las contraseñas no coinciden");
    }  
    } catch (e) {
        console.log(e);
    }
}

function saveTel() {
    try {
    let tel = document.getElementById("tel");

    localStorage.setItem("tel", tel.value);
    console.log("El teléfono se guardo");
    } catch (e) {
        console.log(e);
    }
}

function createUser() {
    try {
    let nombre = localStorage.getItem("nombre");
    let apellido = localStorage.getItem("apellido");
    let dni = localStorage.getItem("DNI");
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
    let tel = localStorage.getItem("tel");

    let user = {
        id: Math.round(Math.random() * (100 - 1) + 1),
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        username: username,
        password: password,
        tel: tel
    };


    localStorage.setItem("user", JSON.stringify(user));




    window.location.href = "login.html";
    } catch (e) {
        console.log(e);
    }
}

