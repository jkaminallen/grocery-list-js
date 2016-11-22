function GroceryList(title, date) {
  this.title = title;
  this.date = date;
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item);
  };
};

GroceryList.prototype.toHTML = function(){
  result = "<h1>" + this.title + "</h1>\n";
  result += "<h3>" + this.date + "</h3>\n";
  result += "<ul>\n";
  //now must make a function to iterate through
  for (var i = 0; i < this.items.length; i++){
    result += "<li>" + this.items[i].toString() + "</li>\n";
  };
  result += "</ul>";
  return result;
};
