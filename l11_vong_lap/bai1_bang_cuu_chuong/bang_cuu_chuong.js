function bangCuuChuong(){
    let bangCuuChuong = "";
    for (let i = 1; i <= 10; i++){
    bangCuuChuong += "<tr>";
    for (let k = 2; k < 10; k++){
        bangCuuChuong += "<td>" + k + " x " + i + " = " + i*k + "</td>";
        }
    bangCuuChuong += "</tr>";
    }
document.getElementById("result").innerHTML = bangCuuChuong;
}
window.onload = bangCuuChuong;