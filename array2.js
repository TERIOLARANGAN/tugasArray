let orang = ["Arman", "Nano", "Lexi", "Anggun", "Nisa", "Lina"];
//hasil slice atau potongan pertama
let group1 = orang.slice(0, 3);
const tampil = document.getElementsByClassName("lis");
tampil[0].innerHTML = group1[0];
tampil[1].innerHTML = group1[1];
tampil[2].innerHTML = group1[2];

//hasil slice atau potongan kedua
let group2 = orang.slice(3)
const tampilLagi = document.getElementsByClassName("list");
tampilLagi[0].innerHTML = group2[0];
tampilLagi[1].innerHTML = group2[1];
tampilLagi[2].innerHTML = group2[2];

/*
cara lain tanpa pakai DOM
let orang = ["Arman", "Nano", "Lexi", "Anggun", "Nisa", "Lina"];
//potongan pertama
let group1 = orang.slice(0, 3);
        document.write("<ol>");
for (n = 0; n < group1.length; n++) {
            document.write(`<li>${group1[n]}</li>`);
        }
        document.write("</ol>");

//potongan kedua
let group2 = orang.slice(3)
        document.write("<ol>");
for (let m = 0; m < group2.length; m++) {
            document.write(`<li>${group2[m]}</li>`);
        }
*/