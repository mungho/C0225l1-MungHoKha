let n = +prompt('Entern random number');

// Covert n về số chẵn vì thuật toán bên dưới chỉ vẽ cho trường hợp n chẵn
if (n%2 == 1){
    n += 1;
}
let heart = ""; //Biến tổng hợp câu lệnh html để chạy hình trái tim
let a = n/2; //Nửa trên bên trái thuộc nửa bên trái
let b = n/2+1; //Nửa trên bên phải thuộc nửa bên trái
let c = 1.5*n; //Nửa trên bên trái thuộc nửa bên phải
let d = 1.5*n+1; //Nửa trên bên phải thuộc nửa bên phải


//Nửa trên trái tim

//Chiều dài hàng bằng 1.5n
for (let i = 0; i < 1.5*n; i++){
    heart += "<p>"
    // Chiều rộng trái tim 2n
    for (let j = 1; j <= 2*n; j++){
        if(j == a || j == b || j == c || j == d){
            heart += '*****';
        }else{
            heart += "-----"
        }
    }
    heart += "</p>"

    //Break khi chạm ngưỡng chiều rộng của trái tim
    if(a == 0 || b == n || c == n || d == 2*n){
        break;
    }
    a -= 1;
    b += 1;
    c -= 1;
    d += 1;
}

//Nửa dưới trái tim
for (let k = 0; k <= n; k++){
    heart += '<p>';
    for(let m = 0; m <= 2*n; m++){
        if(m == k || m == 2*n - k){
            heart += '*****';
        }else{
            heart += "-----"
        }
    }
    heart += "</p>"
}

//In ra trái tim
document.getElementById('result').innerHTML = heart;
