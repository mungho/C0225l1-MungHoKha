function checkAge(){
    let isAge = +document.getElementById("isAge").value;

    if(isAge > 0 && isAge <= 120){
        document.getElementById("result").innerHTML = "This is the human age";
    }else{
        document.getElementById("result").innerHTML = "This is NOT the human age";
    }
}