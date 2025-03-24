function checkTriangle(){
    let firstSide = +document.getElementById("firstSide").value;
    let secondSide = +document.getElementById("secondSide").value;
    let thirdSide = +document.getElementById("thirdSide").value;

    if(firstSide > 0 && secondSide > 0 && thirdSide > 0){
        if(firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && firstSide + thirdSide > secondSide){
            document.getElementById("result").innerHTML = "This is a triangle";
        }else{
            document.getElementById("result").innerHTML = "This is NOT a triangle";
        }
    }else{
        document.getElementById("result").innerHTML = "This is NOT a triangle";
    }
}