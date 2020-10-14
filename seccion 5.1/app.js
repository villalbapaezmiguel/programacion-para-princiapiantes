function imprimirTabla(base,limite){

    for(var i=1; i<=limite; i++){
        
         var resultado= base * i;
        console.log( base +" x " + i+ " = " +resultado );
    }
}

imprimirTabla(6 ,10);
imprimirTabla(3,10);