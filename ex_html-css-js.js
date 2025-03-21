document.getElementById("formulario").onsubmit=function(event){
    let validador=document.getElementById("nombre").trim;
    let validadorEmail=document.getElementById("email");
    let direccion=document.getElementById("direccion");
    let numero=document.getElementById("numero");
    let error=document.getElementById("error");
    
    if(validador===""){
        event.preventDefault;
    }else{
        validador="";
        if(!contains("correo","@")){
            event.preventDefault;
            error.innerHTML="Algunos campos son incorrectos o están incompletos";
        }else{
            validadorEmail="";
            if(direccion.length<18){
                event.preventDefault;
                error.innerHTML="Algunos campos son incorrectos o están incompletos";
            }else{
                direccion="";
                if(numero!==9){
                    event.preventDefault;
                    error.innerHTML="Algunos campos son incorrectos o están incompletos";
                }else{
                    numero="";
                }
            }
        }
    }
    if(!confirm("¿Seguro que quieres confirmar y enviar tu pedido ahora?")){
        event.preventDefault;
    }
}
getElementById("instrucciones").oninput=function(event){
    let numCaracteres = getElementById("instrucciones");
    let contador = getElementById("contador");
    contador=numCaracteres.value.length;
    if(numCaracteres.value.length>150){
        event.preventDefault;
    }
};

