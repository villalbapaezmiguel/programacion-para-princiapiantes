function max(a,b,c){

    var mayor ;
    
    if(a>b){

        if(a<c){
            mayor = c ;
            console.log(mayor);

        }else if(a>c){
            mayor =a ;
            console.log(mayor);
        }

    }else if(a<b){
        mayor = b ;
        console.log(mayor);
    }

    return mayor;    
}


let mayor = max( 5, 2, 6);

//console.log( mayor ); // 6