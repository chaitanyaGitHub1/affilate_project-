
class URL  {
    constructor(url, time){
        this.url = url;
        this.time = time;
    }

    urlDetail(){
        console.log(`My name is ${this.url} and I am ${this.time}`)
    }
}

module.exports = URL;
