function showFibonaci(){
    let number = +document.getElementById("numberFibonaci").value;
    let a = 1;
    let b = 1;
    let fibonaciNumber;
    let fibonaciList = "";

    if( number == 1){
        fibonaciList = 1;
    }else if(number == 2){
        fibonaciList = "1 1";
    }else if (number >2){
        fibonaciList = "1 1 ";
        for (let i = 2; i < number; i++){
            fibonaciNumber = a + b;
            a = b;
            b = fibonaciNumber;
            fibonaciList += fibonaciNumber + " ";
        }
    }else{
        fibonaciList = "Please check again!"
    }
    document.getElementById('result').innerHTML = "Result is: " +  fibonaciList;
}