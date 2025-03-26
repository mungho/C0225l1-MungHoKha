function calculator() {
    let isIncomePerMonth = +document.getElementById("isIncomePerMonth").value;

    if (isIncomePerMonth < 5000000) {
        document.getElementById("result").innerHTML = "Your tax is: " + isIncomePerMonth * 12 * 0.05;
    }else if (isIncomePerMonth < 10000000) {
        document.getElementById("result").innerHTML = "Your tax is: " + ((isIncomePerMonth - 5) * 12 * 0.1 + 0.25 * 12);
    }else if (isIncomePerMonth < 18000000) {
        document.getElementById("result").innerHTML = "Your tax is: " + ((isIncomePerMonth - 10) * 12 * 0.15 + 0.75 * 12);
    }else if (isIncomePerMonth < 32000000) {
        document.getElementById("result").innerHTML = "Your tax is: " + ((isIncomePerMonth - 18) * 12 * 0.2 + 1.65 * 12);
    } else if (isIncomePerMonth < 52000000) {
        document.getElementById("result").innerHTML = "Your tax is: " + ((isIncomePerMonth - 32) * 12 * 0.25 + 3.25 * 12);
    }else if (isIncomePerMonth < 80000000) {
        document.getElementById("result").innerHTML = "Your tax is: " + ((isIncomePerMonth - 52) * 12 * 0.3 + 5.58 * 12);
    }else {
        document.getElementById("result").innerHTML = "Your tax is: " + ((isIncomePerMonth - 80) * 12 * 0.35 + 9.85 * 12);
    }
}