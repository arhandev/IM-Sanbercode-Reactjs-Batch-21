// Soal 1
function halo(){
    return "Halo Sanbers!";
}
console.log("=========Jawaban Soal 1=========")
console.log(halo())
console.log()


// Soal 2
function kalikan(num1, num2){
    return num1*num2
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log("=========Jawaban Soal 2=========")
console.log(hasilKali)
console.log()


// Soal 3
function introduce(name, age, address, hobby){
    // ini cara ekstrem dan age nya harus di convert ke string terlebih dahulu
    // var str = "Nama saya ".concat(name.concat(", umur saya ".concat(age.concat(" tahun, alamat saya di ".concat(address.concat(", dan saya punya hobby yaitu ".concat(hobby.concat("!"))))))))
    var str = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby
    return str;
}
console.log("=========Jawaban Soal 3=========")
var name = "John"
var age = "30"
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan)
console.log()


// Soal 4
function convertObj(array){
    obj = {
        nama: array[0],
        jenisKelamin: array[1],
        hobi: array[2],
        tahunLahir: array[3]

    }
    return obj
}

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
console.log("=========Jawaban Soal 4=========")
console.log(convertObj(arrayDaftarPeserta))
console.log()


// Soal 5
var obj1 = {
    nama: "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000 
}
var obj2 = {
    nama: "jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000 
}
var obj3 = {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000 
}
var obj4 = {
    nama: "Pisang",
    warna: "kuning",
    "ada bijinya": "tidak",
    harga: 5000 
}

var array = [];
array.push(obj1, obj2, obj3, obj4)
console.log("=========Jawaban Soal 5=========")
console.log(array[0])
console.log()


// Soal 6
console.log("=========Jawaban Soal 6=========")

function tambahFilm(array, obj){
    array.push(obj)
}

var dataFilm = []

obj1 = {
    nama: "Naruto",
    durasi: "3 jam",
    genre: "action",
    tahun: "2020"
}
obj2 = {
    nama: "stranger things",
    durasi: "80 jam",
    genre: "mystery",
    tahun: "2020"
}
obj3 = {
    nama: "Ayam  Pok Pok",
    durasi: "2 detik",
    genre: "thriller, mystery, horror",
    tahun: "2090"
}

tambahFilm(dataFilm, obj1)
tambahFilm(dataFilm, obj2)
tambahFilm(dataFilm, obj3)
console.log(dataFilm)
