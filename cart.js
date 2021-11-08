


document.addEventListener("DOMContentLoaded", function () {
    // do things after the DOM loads partially
    console.log("DOM is loaded");
    let cartItem = document.createElement('p')
console.log(cartItem)

item = localStorage.getItem('productName')
var node = document.createTextNode(item)
console.log(node)
cartItem.appendChild(node)
var element = document.getElementById("shoppingCart")
console.log(element)
element.appendChild(cartItem)
  });