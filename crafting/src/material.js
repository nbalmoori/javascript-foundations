class Material {
  constructor(name, pricePerUnit, amount, unit) {
    this.name = name;
    this.price = pricePerUnit;
    this.amount = amount;
    this.units = unit;
  }
  useMaterial(amountUsed) {
    if (amountUsed > this.amount) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    } else {
      this.amount = this.amount - amountUsed;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
  }
  calculateMaterialCost() {
    return (this.price * this.amount)
  }
};

module.exports = Material;
