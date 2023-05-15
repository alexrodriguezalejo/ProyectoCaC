function suscribirse() {
    var respuesta = confirm("Estas seguro que desea suscribirse?");
    if (respuesta == true) {
        return true;   
    } else {
        return false;
    }
}