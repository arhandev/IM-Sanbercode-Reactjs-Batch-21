// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
kataKeempat = kataKeempat.toUpperCase()
kataKedua = kataKedua.charAt(0).toUpperCase().concat(kataKedua.substring(1, 6))

console.log("Jawaban Soal Pertama");
console.log(kataPertama.concat(" ".concat(kataKedua.concat(" ".concat(kataKetiga.concat(" ".concat(kataKeempat.concat("\n"))))))));



// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log("Jawaban Soal Kedua");
console.log(Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat));
console.log("");



// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31)

console.log('Jawaban Soal Ketiga'); 
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima + "\n");



// Soal 4
var nilai = 40;

console.log("Jawaban Soal Keempat")
if(nilai >= 80){
    console.log("indeksnya A\n")
}
else if(nilai >= 70 && nilai < 80){
    console.log("indeksnya B\n")
}
else if(nilai >= 60 && nilai < 70){
    console.log("indeksnya C\n")
}
else if(nilai >= 50 && nilai < 60){
    console.log("indeksnya D\n")
}
else if(nilai < 50){
    console.log("indeksnya E\n")
}



// Soal 5
var tanggal = 11;
var bulan = 10;
var tahun = 2001;

console.log("Jawaban Soal Kelima")
switch(bulan){
    case 1: {bulan = "Januari";break;} 
    case 2: {bulan = "Febuari";break;} 
    case 3: {bulan = "Maret";break;} 
    case 4: {bulan = "April";break;} 
    case 5: {bulan = "Mei";break;} 
    case 6: {bulan = "Juni";break;} 
    case 7: {bulan = "Juli";break;} 
    case 8: {bulan = "Agustus";break;} 
    case 9: {bulan = "September";break;} 
    case 10: {bulan = "Oktober";break;} 
    case 11: {bulan = "November";break;} 
    case 12: {bulan = "Desember";break;} 
    default: {console.log("BUKAN BULAN");break;} 
}

console.log(tanggal + " " + bulan + " " + tahun)