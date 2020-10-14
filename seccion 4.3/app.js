// 1=Lunes , 2=Mates ,3=Miercoles,4=Jueves, 5=Viernes , 6=Sabado y 0=Domingo.

var dia= 5;

switch(dia){

    case 0 :
        console.log("Hoy es Domingo ");
        break;

    case 1:
        console.log("Hoy es Lunes ");
        break;

    case 2:
        console.log("Hoy es Martes");
        break;
    
        case 3 :
            console.log("Hoy es Miercoles");
            break;
        
        case 4:
            console.log("Hoy es Jueves");
            break;

        case 5:
            console.log("Hoy es Viernes");
            break;

        case 6 :
            console.log("Hoy es Sabado ");
            break;
        
        default :
        console.log("Numero invalido.");
}