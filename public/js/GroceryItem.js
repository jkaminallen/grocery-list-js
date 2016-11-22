function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity || 1;
  this.toString = function() {
    return "(" + this.quantity + ")" + " " + this.name 
  }
}
