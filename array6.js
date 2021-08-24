let materi1 = ["Math", "English", "Programming"];
let materi2 = ["Geography", "Spanish", "Programming"];
//kita gabung kedua array diatas
let gabungMateri = materi1.concat(materi2);
//setelah gabung kita filter
let materiSama = gabungMateri.filter(item => item === "Programming");
document.getElementById("muncul").innerHTML = `setelah saya filter, element yang sama adalah  materi: ${materiSama}`;
