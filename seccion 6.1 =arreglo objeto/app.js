var persona1 ={
    nombre:"Miguel",
    edad:18,
};
var persona2 ={
    nombre:"Adrian",
    edad:29,
};
var persona3 ={
    nombre:"Gustavo",
    edad:28,
};

var personas = [persona1,persona2,persona3];

//console.log(personas);

 for(var i = 0;i<personas.length;i++){

    var persona = personas;
    console.log(`${persona[i].nombre} --${persona[i].edad}`);
 }

 //otra manera de hacerlo:
 /*   for(var i = 0;i<personas.length;i++){

    var persona = personas[i];
    console.log(`${personas[i].nombre} --${personas[i].edad}`);*/