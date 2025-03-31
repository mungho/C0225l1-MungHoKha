function giaiThua(){
    let num = +document.getElementById('num').value;
    let giaiThua = 1;
    for(let i=2; i<= num; i++){
        giaiThua *= i;
    }
    alert ('Kết quả là: ' + giaiThua);
}