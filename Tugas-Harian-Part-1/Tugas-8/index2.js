var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var counter = 0;

function run(time=10000){
    readBooksPromise(time, books[counter])
    .then(function(fullfiled){
        counter++;
        if(fullfiled > 0){
            run(fullfiled)
        }
    })
    .catch(function(error){
        console.log()
    })
}

run()