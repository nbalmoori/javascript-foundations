class Ogre {
  constructor(ogreObject){
    this.name = ogreObject.name;
    this.home = ogreObject.abode || 'Swamp';
    this.swings = 0;
  }
  encounter(human){
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swings += 1
    }
    if (this.swings % 2 == 0) {
      human.knockedOut = true;
    }
  }
  swingAt(human) {
    this.swings += 1;
  }
  apologize(human) {
    human.knockedOut = false;
  }
};

module.exports = Ogre;
