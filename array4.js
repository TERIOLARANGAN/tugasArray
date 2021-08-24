let angka = [3, 5, 7, 9, 11];
const para = document.getElementById("para");
para.innerHTML = "array angka sebelum dikali 5 adalah: "+angka;

let angka2 =  angka.map((item) => {
  return item * 5 + " " //" " agar hasilnya ada spasinya
})
const par = document.getElementById("par");
par.innerHTML = "array angka setelah dikali 5 adalah: "+angka2;