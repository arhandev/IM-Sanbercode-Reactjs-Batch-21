// Soal 1
var count = 1;
console.log("Output Soal Nomor 1")
console.log("LOOPING PERTAMA")
while(count <= 20){
    if(count%2 === 0){
        console.log(count + " - I love coding")
    }
    count++;
}
count=20
console.log("LOOPING KEDUA")
while(count > 0){
    console.log(count + " - I will become a frontend developer")
    count-=2
}
console.log("")


// Soal 2
console.log("Output Soal Nomor 2")
for( var i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 2 === 1){
        console.log(i + " - I Love Coding")
    }
    else if(i % 2 === 1){
        console.log(i + " - Santai")
    }
    else if(i % 2 === 0){
        console.log(i + " - Berkualitas")
    }
}
console.log("")


// Soal 3
console.log("Output Soal Nomor 3")
var sym = "#"
for(var i = 0; i < 7; i++){
    console.log(sym)
    sym = sym.concat("#")
}
console.log("")


// Soal 4
console.log("Output Soal Nomor 4")
var kalimat="saya sangat senang belajar javascript"
kalimat = kalimat.split(" ")
console.log(kalimat)

console.log("")


// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort()
console.log("Output Soal Nomor 5")
for ( var i = 0; i < daftarBuah.length; i++){
    console.log(daftarBuah[i])
}