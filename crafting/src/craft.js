class Craft {
  constructor(craftObject) {
    this.name = craftObject.type;
    this.materials = craftObject.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`
  }
  calculateProjectTotal() {
    var projectTotal = 0
    for (var i = 0; i < this.materials.length; i++) {
    projectTotal += this.materials[i].calculateMaterialCost()}
    return projectTotal
  }
}

module.exports = Craft;
