function puntoUno(){
    var nombre = document.getElementById("uno").value;
    nombre = nombre.toUpperCase();
    alert(nombre);
}

function puntoDos() {
    var apellido = document.getElementById("inputApellido");
    var btnEnviar = document.getElementById("btnEnviar");
    if(apellido.value.length > 0){
        btnEnviar.disable = false;
    } else {
        btnEnviar.disable = true;
    }
}

function puntoTres(){
    var inputSi = document.getElementById("radioSi");
    var inputNo = document.getElementById("radioNo");

    var div = document.getElementById("divCheckbox");
    if(inputSi.checked){
        div.innerHTML =`
        <label for="lblRegistro"> Desea registrarse en el concurso?
            <label for="lblCheckSi"> SI
                <input type="checkbox" id="inputCheckbox1">
            </label>
        </label>
        <label for="lblCheckSi"> NO
            <input type="checkbox" id="inputCheckbox1">
        </label>
        `;
    } else{
        div.innerHTML="";
    }
}

function validarPassword(){
    let pass1 = document.getElementById("inputPass1");
    let pass2 = document.getElementById("inputPass2");
    if(pass1.value == pass2.value){
        pass1.style.border = "2px solid green";
        pass2.style.border = "2px solid green";
    } else{
        pass1.style.border = "2px solid red";
        pass2.style.border = "2px solid red";
    }
}