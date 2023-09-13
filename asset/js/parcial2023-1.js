function validarNombre(){
    var nombre = document.getElementById("user_name").value;
    var inpEnviar = document.getElementById("inpEnviar");
    if(nombre.length > 0){
        inpEnviar.disabled = false;
        inpEnviar.style.border = "2px solid #A6FF96";
    } else{
        inpEnviar.disabled = true;
    }
    console.log(nombre.length);
}

function validarEdad(){
    var edad = document.getElementById("user_edad").value;
    var edadCastiada = parseInt(edad);
    var inp_reset = document.getElementById("inp-reset");
    if(edadCastiada < 18 || edadCastiada > 60){
        alert("LA EDAD ES INCORRECTA");
        inp_reset.removeAttribute = ("disabled");
        inp_reset.style.color = "#952323";
    } else{
        inp_reset.disabled = true;
    } 
}