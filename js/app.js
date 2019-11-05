 $("#btnCalcular").click(function(){
     Calcular();
     
 });
 function Calcular(){
     let opcion = $("#moneda option:selected").html();
     let moneda = $("#moneda option:selected").val();
     let monto = $("#monto").val();
     let resultado;

     if(opcion=="Dolar"){

         resultado = parseInt(monto)*parseInt(moneda);
         $("#cotizacion").html(moneda+" Gs.");
         $("#monto_ing").html(monto+ " Dolares. ");
          $("#cambio").html(resultado + " Gs.");
         mostrar(resultado+" Gs ");
       

     } if(opcion=="Real"){

        resultado = parseInt(monto)*parseInt(moneda);
        $("#cotizacion").html(moneda+" Gs.");
        $("#monto_ing").html(monto+ " Reales. ");
        $("#cambio").html(resultado + " Gs.");
         mostrar(resultado+" Gs ");

       
        

    } if(opcion=="Peso"){

        resultado = parseInt(monto)*parseInt(moneda);
        $("#cotizacion").html(moneda+" Gs.");
        $("#monto_ing").html(monto+ " Pesos. ");
        $("#cambio").html(resultado + " Gs.");
         mostrar(resultado+" Gs ");
        
        

    }
    function mostrar (rs){ 
       $("#resultado").text(rs);
    }
   
 }

