function validar_correo(correo){
    let expresion = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    if(expresion.test(correo)){
     
        return validar_dominio(correo);
    }
    return false;
}



function validar_dominio(correo){
    if (correo.split('').filter(c=>c == '@').length != 1) return false;
    return correo.split('').reduce((contador, item)=>{
        return item == '.'? contador+1:contador;
    },0) == 1? true:false;
}




//correo valido
console.log(validar_correo("ejemplo@ejemplo.com"));

//correos invalido
console.log(validar_correo("ejemplo@@ejemplo.com"));
console.log(validar_correo("ejemplo@ejemplo....com"));