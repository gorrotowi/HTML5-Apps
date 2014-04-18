function calcular(){

    //alert("sacando el flow bitch!");
    
    var deseado = $("#importeDes").val();
    
    //alert(deseado);
    var iv = .16;
    var importe = 0;
    if (iv > .14) {
    importe = deseado / .9533333333333333334;
    } else {
    importe = deseado / .9;
    }
    
    var iva = importe * iv;
    var subtotal = importe + iva;
    var retencionISR = importe * .1;
    var retencionIVA = (iva / 3) * 2;
    var total = subtotal - retencionISR - retencionIVA;
    
    console.log("iva "+iva+" subtotal "+subtotal+" retencion ISR "+retencionISR+" retencion IVA "+retencionIVA +" total "+total );
    
    $('#importe').text("$ "+importe.toFixed(2));
    $('#iva').text("$ "+iva.toFixed(2));
    $('#subtotal').text("$ "+subtotal.toFixed(2));
    $('#retIva').text("$ "+retencionIVA.toFixed(2));
    $('#retIsr').text("$ "+retencionISR.toFixed(2));
    $('#total').text("$ "+total.toFixed(2));
}