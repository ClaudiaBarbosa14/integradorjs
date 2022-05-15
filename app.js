let valor=200



function ShowSelected(){
    let desc = document.getElementById("descuento").value;
    //console.log(desc);
   if (desc ==="1"){
        return desc = 0.80;
    }
    if (desc === "2"){
        return desc = 0.50;
    }
    if (desc === "3"){
        return desc = 0.15;
    }
    
} 


function funcion(){
    
     let cantidad = document.getElementById("prueba").value;
     document.getElementById("prueba2").innerHTML = `Total a Pagar: $ ${(cantidad * valor )- (valor * cantidad * ShowSelected())}`
     console.log();
     
}

function funcion2(){
    
    //let cantidad = document.getElementById("prueba").value;
    document.getElementById("prueba2").innerHTML = `Total a Pagar: $ 0`
    console.log();
    


}

