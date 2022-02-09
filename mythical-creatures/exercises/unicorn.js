class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined){
      this.color = "white";
    } else {
    this.color = color}
    }
  isWhite() {
    if(this.color !== "white") {
      return false;
    }
  }
  says(says) {
    return `**;* ${says} *;**`
  }
}

var unicorn = new Unicorn('Louisa');

console.log(unicorn.isWhite());



module.exports = Unicorn;
