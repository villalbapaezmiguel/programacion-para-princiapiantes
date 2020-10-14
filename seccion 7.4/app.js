var numeros=[1, 6, 8, 4, 2, 7, 10, 3, 5 ];
var numeroMayor=-999999;


for(var i=0;i<=numeros.length;i++){
    if(numeros[i]>=numeroMayor){
        numeroMayor=numeros[i];
    }
}

console.log("El numero mayor es "+numeroMayor);


//for (var i=0; i<dato.length; i++) { msgForNormal = msgForNormal + dato[i] + ' - '; }
//5