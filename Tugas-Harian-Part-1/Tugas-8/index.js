var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000},
]

var counter = 0;

function run(time=10000){
    readBooks(time, books[counter], function(time){
        if(time > 0){
            counter++;
            run(time)
        }
    })
}

run()