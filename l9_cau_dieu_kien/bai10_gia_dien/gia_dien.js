function electronicPrice(){
    let isAmount = +document.getElementById("isElectronicNumber").value;
    let totalPay = 0;
    if((isAmount > 0) && (isAmount <= 50)){
        totalPay = isAmount*1.806;
        document.getElementById("result").innerHTML = "Total is: " + Math.round(totalPay*100)/100;
    }else if( isAmount <= 100){
        totalPay = 50*1.806 + (isAmount-50)*1.866;
        document.getElementById("result").innerHTML = "Total is: " + Math.round(totalPay*100)/100;
    }else if( isAmount <= 200){
        totalPay = 50*1.806 + 50*1.866 + (isAmount-100)*2.167;
        document.getElementById("result").innerHTML = "Total is: " + Math.round(totalPay*100)/100;
    }else if( isAmount <= 300){
        totalPay = 50*1.806 + 50*1.866 + 100*2.167 + (isAmount-200)*2.729;
        document.getElementById("result").innerHTML = "Total is: " + Math.round(totalPay*100)/100;
    }else if( isAmount <= 400){
        totalPay = 50*1.806 + 50*1.866 + 100*2.167 + 100*2.729 + (isAmount-300)*3.050;
        document.getElementById("result").innerHTML = "Total is: " + Math.round(totalPay*100)/100;
    }else if( isAmount > 400){
        totalPay = 50*1.806 + 50*1.866 + 100*2.167 + 100*2.729 + 100*3.050 + (isAmount-400)*3.151;
        document.getElementById("result").innerHTML = "Total is: " + Math.round(totalPay*100)/100;
    }else{
        document.getElementById("result").innerHTML = "Please check the electronic numbers";
    }
}