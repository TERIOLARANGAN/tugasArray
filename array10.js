const inputUserAndPassword = [];
function tampilkanData() {
const userName =document.getElementById("usrnm").value;
const password = document.getElementById("pswd").value;
//kita bikin pengandaian agar user dan password harus sesuai aturan yang kita buat
if (userName.length >= 5 && password.length >= 8) {
//kita gabung inputan user dan password sehingga input menjadi data array
const gabungUserAndPassword = `userName: ${userName} password: ${password}`;
//setelah jadi array,  kita push data
inputUserAndPassword.push(gabungUserAndPassword)
  document.getElementById("data").innerHTML = inputUserAndPassword;
}
}
/*
//kalau tidak mau pakai pengandaian pake script ini ya!!
const inputUserAndPassword = [];
function tampilkanData() {
const userName =document.getElementById("usrnm").value;
const password = document.getElementById("pswd").value;
//kita butuh satu variabel baru untuk menggabungkan kedua variabel userName dan password
const gabungUserAndPassword = `userName: ${userName} password: ${password}`;

inputUserAndPassword.push(gabungUserAndPassword)
  document.getElementById("data").innerHTML = inputUserAndPassword;
}
*/