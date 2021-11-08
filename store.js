if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    addItemToCart()
    //select all the remove buttons 
    var removeBtns = document.getElementsByClassName("btnRemove")
    if (removeBtns == null) {
        localStorage.clear()
    }
    console.log(removeBtns)
    for (let i = 0; i < removeBtns.length; i++) {
        var btn = removeBtns[i]
        btn.addEventListener('click', removeCartItem) 
    }
}

function removeCartItem(event) {
    //console.log('clicked')
    let btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    localStorage.removeItem('item0')
    var count = parseInt(localStorage.getItem('count'))
    localStorage.setItem('count', count - 1)
    //update the total of cart 
    updateCartTotal()
}

//update the number of items currently in the cart
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName("cartItems")[0]
    let cartRows = cartItemContainer.getElementsByClassName('row')
    let total = 0
    for (var i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cartPrice')[0]
        let quantityElement = cartRow.getElementsByClassName('cartQuantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.ariaValueMax
        total = total + (price * quantity)

    }
}

function addItemToCart(title, description, price, image) {
    var count = parseInt(localStorage.getItem('count'))
    let cartNav = document.getElementById('cartNav')
    cartNav.innerHTML = "Cart(" + count.toString() + ")"
    for (var i = 0; i < count; i++) {
        if (localStorage.getItem('name' + i.toString()) != null) {
            title = localStorage.getItem('name' + i.toString())
            description = localStorage.getItem('description' + i.toString())
            price = localStorage.getItem('price' + i.toString())
            image = localStorage.getItem('image' + i.toString())
            var cartRow = document.createElement('div')
            var cartItems = document.getElementsByClassName('cartItems')[0]
            var cartRowContents = `
            <div class="row" style="margin-bottom: 250px">
            <div class="column" style="width:15%">
                <img id="detail-image" class="shop-item-image"src="${image}" alt="Snow">
              </div>
            <div class="column" style="width:15%">
                <h2>Item</h2>
                <p>${title}</p>
              </div>
            <div class="column" style="width:15%">
              <h2>Description</h2>
              <p>${description}</p>
            </div>
            <div class="column" style="width:15%">
              <h2>Price</h2>
              <p class="cartPrice">${price}</p>
            </div>
            <div class="column" style="width:15%">
                <h2>Quanitity</h2>
                <input class="cartQuantity" type="number" value="1" min="1">
              </div>
              <div class="column" style="width:25%">
                <button class="btnRemove">Remove</button>
              </div>
          </div>
          <p></p>
          <hr class="" style: color="white">
          `
        
          cartRow.innerHTML = cartRowContents
          cartItems.appendChild(cartRow)
        }
   
    }
    

}

function addToCart() {

}