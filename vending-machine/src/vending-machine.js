class VendingMachine {
  constructor(vendingMachine) {
    this.id = vendingMachine.id;
    this.isBroken = vendingMachine.isBroken;
    this.snacks = [];
  }
  addSnacks(snack) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        var snackExists = true
      }
    }
    if (snackExists) {
      return `Sorry, that snack is already stocked! Try adding a different snack.`
    } else {
      this.snacks.push(snack);
    }
  }
  purchaseSnack(snackName, cash) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snackName && this.snacks[i].itemsInStock > 0 && cash >= this.snacks[i].price) {
        this.snacks[i].itemsInStock -= 1;
        return `Success! Here is $${cash - this.snacks[i].price} back!`
      } else if (this.snacks[i].itemsInStock === 0) {
        return `Sorry, no items in stock. Try another item.`
      } else if (this.snacks[i].price > cash) {
        return `Sorry, not enough payment. Please add more money.`
      }
    }
  }
}

module.exports = VendingMachine;
