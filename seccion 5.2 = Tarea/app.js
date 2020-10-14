//  Crear una funcion que me permita  determinar 
//  la clalificacion de 3 alumnos
//  uno con nota de 100 , otro con nota de 80
//  y el ultimo con nota de 59
function calcularNota(nota , letra){
    

 if (nota>=100 ){
     letra = "A";
     console.log("Su nota es " + letra);
 }else if(nota >=80){
     letra = "B";
     console.log("Su nota es " + letra);

 }else if(nota <= 59 ){
     letra="F";
     console.log("Su nota es " + letra);
 }
}
calcularNota(100);
calcularNota(80);
calcularNota(59);