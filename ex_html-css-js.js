document.getElementById("formulario").onsubmit=function(event){
    let validador=document.getElementById("nombre").trim;
    let validadorEmail=document.getElementById("email");
    let direccion=document.getElementById("direccion");
    if(validador=""){
        event.preventDefault;
    }else{
        validador="";
        if(!validadorEmail.contains("@")){
            event.preventDefault;
        }else{
            validadorEmail="";
            if(direccion.length<18){
                event.preventDefault;
            }
        }
    }

}

