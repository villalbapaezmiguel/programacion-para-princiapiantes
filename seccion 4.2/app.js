/*
  Cree un algoritmo que permita determinar 
  la clasificacion en letras de un alumno 

  Si la nota se encuentra entre 100 a 90 = A
  Si la nota se encuentra entre 80 a 89 = B 
  Si la nota se encuentra entre 70 a 79 = C
  Si la nota se encuentra entre 60 a 69 = D
  Si la nota se encuentra inferior a 60 = F

  */
 var nota = 70 ;
 var letra = " ";

 if ( nota >=90 && nota<=100 ){
     letra = "A";
     console.log("Su nota es " + letra);
 }else{
     if (nota >=80 && nota <=89){
        letra="B";
        console.log("Su nota es " + letra);
     }else{
         if(nota>=70 && nota<=79){
             letra="C";
             console.log("Su nota es " + letra);
         }else{
             if(nota>60 && nota <=69 ){
                 letra="D";
                 console.log("Su nota es " + letra);
             }else{
                 if(nota <=60){
                     letra="F";
                     console.log("Su nota es " + letra);
                 }
             }
         }
     }
 }