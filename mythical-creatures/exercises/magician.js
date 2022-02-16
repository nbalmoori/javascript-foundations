class Magician {
  constructor(magicianProperty) {
    this.name = `The Great ${magicianProperty.name}`;
    this.assistant = magicianProperty.assistant;
    this.favoriteAccessory = magicianProperty.clothing || 'top hat';
    this.confidencePercentage = 10;
  };
  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`
  };
  performTrick() {
    this.confidencePercentage = this.confidencePercentage + 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  };
  performShowStopper() {
    if (this.confidencePercentage > 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  };
};


module.exports = Magician;
