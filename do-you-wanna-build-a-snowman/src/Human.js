var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
    this.snowmenBuilt = [];
  }
  gatherMaterials(material, qty) {
    this.materials[material] += qty;
  }
  buildASnowman() {
    var newSnowman = new Snowman(this.materials);
    newSnowman.canWearMagicHat;
    this.snowmenBuilt.push(newSnowman);
    return newSnowman;
  }
  placeMagicHat() {
    if (this.snowmenBuilt[0].magicHat){
      return `Woah, this snowman is coming to life!`
    } else {
      return `I guess I didn\'t build it correctly.`
    }
  }
}

module.exports = Human;
