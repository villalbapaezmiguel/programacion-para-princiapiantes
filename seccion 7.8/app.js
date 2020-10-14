function masLargo(personajes){

    var nombreLargo =" ";

    for(var i = 0; i <personajes.length; i++){

       var nombre=personajes[i];

       if(nombre.length >nombreLargo.length){
        nombreLargo = nombre;
       }
    }



    return  nombreLargo ;

}
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

let heroeLargo = masLargo( heroes );
console.log( heroeLargo ); // Profesor Charles Xavier