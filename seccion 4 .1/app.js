//Crear un algoritmo , que basado en la nota
//imprima si el alumno aprueba o no la materia
//si el alumno tiene nota menor a 50
//imprimir un mensaje que diga :
//por favor estudie mas

var nota = 10;

if(nota >= 60){
    console.log("usted aprobo la materia.");
}else{
    if(nota <= 59 && nota >=51 ){
        console.log("desaprobo la clase.")
    }else{
        if(nota<=50){
            console.log("por favor estudie mas.");
        }
    }
}
console.log("fin de la clase.");