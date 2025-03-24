function caculator(){
    let isAmount = +document.getElementById("isAmount").value;
    let isMonths = +document.getElementById("isMonths").value;
    let isInterest = +document.getElementById("isInterest").value;
    let isTotal = isAmount * Math.pow(1 + isInterest/100, isMonths);

    document.getElementById("result").innerHTML = "Total debt after " + isMonths+ " months is: " + isTotal;
}