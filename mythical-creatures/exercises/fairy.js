class Fairy {
  constructor(name){
    this.name = name
    this.dust = 10;
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.clothes = {
      dresses: ['Iris']
    }
  }
  receiveBelief(){
    this.dust += 1;
  }
  believe(){
    this.dust += 10;
  }
  makeDresses(dressArray){
    for (var i = 0; i < dressArray.length; i++) {
      this.clothes.dresses.push(dressArray[i])
    }
  }
  becomeProvoked(){
    this.disposition = "Vengeful";
  }
  replaceInfant(infant){
    if (this.disposition = "Vengeful") {
      this.humanWards.push(infant);
      infant.disposition = "Malicious"
    }
    if (this.humanWards.length > 2) {
      this.disposition = 'Good natured'
    }
    return infant;
  }
}


module.exports = Fairy;
