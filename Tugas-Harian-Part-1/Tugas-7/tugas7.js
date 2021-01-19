// Soal 1
// Release 0
class Animal{
    constructor(name, legs = 4){
        this._name = name
        this._legs = legs
        this._cold_blooded = false
    }
    get name(){
        return this._name
    }
    get legs(){
        return this._legs
    }
    get cold_blooded(){
        return this._cold_blooded
    }
    set legs(x){
        this._legs = x
    }
}
var sheep = new Animal("shaun");
console.log("=======Jawaban Soal 1========")
console.log("===Release 0===")
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)
sheep.legs = 3
console.log(sheep.legs)
console.log()



// Release 1
class Ape extends Animal{
    constructor(name, legs = 2){
    super(name, legs)
    }

    yell(){
        console.log("Auooo")
    }
}
class Frog extends Animal{
    constructor(name, legs = 4){
    super(name, legs)
    }

    jump(){
        console.log("hop hop")
    }
}
console.log("===Release 1===")

var sungokong = new Ape("kera sakti")
sungokong.yell()
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
var kodok = new Frog("buduk")
kodok.jump()
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log()


// Soal 2
class Clock{
    constructor({template}){
        this._template = template
        this.render = this.render.bind(this)
        this.timer
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    stop = () => {
        clearInterval(this.timer);
    };

    start = () => {
        this.render();
        this.timer = setInterval(this.render, 1000);
    };

    
}

var clock = new Clock({template: 'h:m:s'});
console.log("=======Jawaban Soal 2========")
clock.start(); 