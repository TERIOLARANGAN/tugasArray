const list = document.getElementsByTagName("li")
list[0].innerHTML = "CTO";
list[1].innerHTML = "Front-End Web Developer";
list[2].innerHTML = "Back-End Web Developer";
list[3].innerHTML = "Web Designer";
list[4].innerHTML = "Full-Stuck Developer";
/*
cara lain tanpa DOM:
const programmer = ["CTO", "Front Web", "Back Web", "Stuff IT", "Freelancer IT"];
        document.write("<ol>");
for (let m = 0; m < programmer.length; m++) {
            document.write(`<li>${  programmer[m]}</li>`);
        }
        document.write("</ol>");
document.write("jumlah seluruh jabatan yang berhubungan dengan programmer ada "+programmer.length);
*/