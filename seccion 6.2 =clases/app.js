/*var carro={
    marca:"chevrolet",
    tipo:"sedan",
    puerta:4,
}*/

class Carro {
    constructor(marca,tipo,puerta){
        this.marca=marca;
        this.tipo=tipo;
        this.puerta=puerta;
        this.encendido=false;
        this.conbustible=100;

     //   this.noSePuedeApagar;false;
     //   this.conbustible=100;
    }

    encenerCarro(){
        
        
        if(this.encendido){
            this.encendido=true;
            console.error("El acrro ya estaba encendido");
        }else {
            this.encendido=true;
            console.log("El carro ya esta encendido ");
        }
        return this;
    }
    realizarViaje(consumo){

        if(this.encendido){

            if(consumo >this.conbustible){
                console.log("no hay gasolina suficiente");
            }
            if(this.encendido ){
                
                this.conbustible = this.conbustible - consumo;
                return "Esto es lo que le queda de conbustible " +this.conbustible;
    
            }
        }else{
            console.log("El carro esta apagado");
        }
        
        
    }
}
var carro = new Carro ("Mazda","Sedan",2);

console.log(carro);
/*
 carroEncedido() {
        
        if(this.encendido){
            console.error("El carro ya estaba encendido , ahora se daño el motor");    
        }else {
            this.encendido=true;
            console.log("el carro ya esta encendido");   

        }
   
        return this;
    }
}
realizarViaje(consumo){
    
    if(this.encendido){

        if(this.conbustible > consumo){
            console.log("No hay suficiente gasolina " + this.conbustible);
        }else{
            
        }
        this.conbustible = this.conbustible - consumo;
        return + "Le queda de conbustible " + this.conbustible;

    }
    else{
        console.log("El carro esta apagado");
    }

}

var carro = new Carro("mini","Urbano",4);

console.log(carro);*/ 

