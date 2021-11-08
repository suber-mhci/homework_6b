
addCount = 0
function addToCart() {
    console.log("added to cart")
    let productName = document.getElementById('productName').innerHTML
    let productPrice = document.getElementById('productPrice').innerHTML
    let productImage = document.getElementById('detail-image').src
    let productDescription = document.getElementById('productDescription').innerHTML
    console.log(productName + ' ' + productPrice)
    //store product name and price to loadstorage 
    localStorage.setItem('name' + addCount.toString(), productName)
    localStorage.setItem('image' + addCount.toString(), productImage)
    localStorage.setItem('description' + addCount.toString(), productDescription)
    localStorage.setItem('price' + addCount.toString(), productPrice)
    addCount += 1 
    console.log(addCount)
    localStorage.setItem('count', addCount)
    //make update on the navigation bar
    let cartNav = document.getElementById('cartNav')
    cartNav.innerHTML = "Cart(" + addCount.toString() + ")"
}

let count = 0
let previous = null
function selectSize(_this) {
    let basic = _this.style.backgroundColor
    if (count == 0) {
        _this.style.backgroundColor = "red";
        previous = _this
        count += 1
    } else {
        previous.style.backgroundColor = basic;
        _this.style.backgroundColor = "red";
        previous = _this
    }
    console.log(previous.innerHTML)
}


let count2 = 0
let previous2 = null
function selectColor(_this) {
    if (count2 == 0) {
        _this.style.border = "medium solid red";
        previous2 = _this
        count2 += 1
    } else {
        previous2.style.border = "medium solid transparent";
        _this.style.border = "medium solid red";
        previous2 = _this
    }
    console.log(previous2.innerHTML)
}








