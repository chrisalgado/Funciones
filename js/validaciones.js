function solonumeros(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = [8,37,39,46];
 
    teclado_especial = false
    for(var i in especiales){
 if(key == especiales[i]){
     teclado_especial = true;
     
        } 
    }
 
    if(numeros.indexOf(tecla)==-1 && !teclado_especial)
        return false;
}