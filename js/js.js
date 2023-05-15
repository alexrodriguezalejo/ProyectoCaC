function confirmacion() {
    var respuesta = confirm("Desea enviar esta informacion??");
    if (respuesta == true) {
        return true;   
    } else {
        return false;
    }
}