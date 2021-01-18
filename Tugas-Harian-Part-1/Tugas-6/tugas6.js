// Soal 1
const pi = 3.14159265359 
const luasLingkaran = (radius) => pi*radius*radius
const kelilingLingkaran = (radius) => pi*radius*2
console.log("=========Jawaban Soal 1=========")
console.log("luas = " + luasLingkaran(3))
console.log("keliling = " + kelilingLingkaran(3))
console.log()


// Soal 2
let kalimat = ""
console.log("=========Jawaban Soal 2=========")
const penambah = (kata) => (
    kalimat = `${kalimat}${kata} `
)
penambah("saya")
penambah("adalah")
penambah("seorang")
penambah("frontend")
penambah("developer")
console.log(kalimat)
console.log()

// Soal 3
console.log("=========Jawaban Soal 3=========")
const newFunction = (firstName, lastName) =>{
    return {
      firstName,
      lastName,
      fullName: () => {
          console.log(`${firstName} ${lastName}`)
      }
    }
  }

  newFunction("William", "Imoh").fullName()
  console.log()


// Soal 4
console.log("=========Jawaban Soal 4=========")
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  const {firstName, lastName, destination, occupation, spell} = newObject
  console.log(firstName, lastName, destination, occupation, spell)
  console.log()

//   Soal 5
console.log("=========Jawaban Soal 4=========")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)
console.log()