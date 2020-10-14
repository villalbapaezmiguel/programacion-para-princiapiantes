function describirPersona(p){

    console.log(`${p.nombre} tiene una edad de ${p.edad} años y mide ${p.altura}`);
}
var persona = {

    nombre : "Marina",
    edad: 49,
    altura:1.55,
}
describirPersona(persona);

function descripcionDeAuto(a){
    
 console.log(`El auto tiene ${auto.ventanas} ventanas y es de  la marca ${auto.marca}`)   
}
var auto={
    ruedas:4,
    ventanas:6,
    marca:"chevrolet",
    color:"rojo",
}
descripcionDeAuto(auto);