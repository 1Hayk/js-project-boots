let items = document.getElementById('items')
let count 
let total
let totalSum
let cartItems = document.getElementById('cartItems')
let cartBox = document.getElementById('cartBox')
let totalBox = document.getElementById('total')
let countBox = document.getElementById('count')

function showCart() {
    cartBox.classList.toggle('show')
}

function show() {
    items.innerHTML = ''

    let id = localStorage.getItem('id')
    for (i = 1; i <= id; i++) {
        let product = JSON.parse(localStorage.getItem(`product_${i}`))
        if (product != null) {
            items.innerHTML +=
                `
    <div class="item">
      <div class="item-img">
        <img src="./img/${product.image}" >
      </div>
      <div class="item-info">
        <p class="item-name">${product.name}</p>
        <a href="#" class="add" onclick="add(${product.id})">Add to cart</a>
      </div>
      <p id="itemPrice"><span>${product.price} AMD</span></p>
    </div>
            
            
            `
        }
    }

}

function add(id) {

    let  product = JSON.parse(localStorage.getItem(`product_${id}`))
    
    count = 1

  if(localStorage.getItem(`product_card_${id}`) != null) {
      let oldProduct = JSON.parse(localStorage.getItem(`product_card_${id}`))
      oldProduct.count ++
      oldProduct.price = product.price * oldProduct.count
      
      localStorage.setItem(`product_card_${id}`, JSON.stringify(oldProduct))
      
  }else{
      let newProduct = {
          id:id,
          image:product.image,
          name:product.name,
          price:product.price,
          count: count
      }
      localStorage.setItem(`product_card_${id}`, JSON.stringify(newProduct))
  }
    showCartItems()

}

function showCartItems() {
    let id = localStorage.getItem('id')
    cartItems.innerHTML = ''
    totalBox.innerHTML = 'Cart is empty'
    totalSum = 0
    for (let i = 1; i <= id; i++) {
        let product = JSON.parse(localStorage.getItem(`product_card_${i}`))

        if (product != null) {
            totalSum += +product.price
            totalBox.innerHTML = `Total:${totalSum}`
            cartItems.innerHTML +=
                `
                <div class="cartItem">
                <img src="./img/${product.image}" > 
                <div class="cartItemInfo">
                    <p>${product.name}</p>
                    <p>${product.price}AMD</p>
                </div>
                <span id = 'cartItemCount'>${product.count}x</span>
                <i class="fa fa-trash" onclick="remove(${product.id})"></i>
               
             </div>
          
          
          ` 
        }
        let cartItem = document.getElementsByClassName('cartItem')
            countBox.innerHTML = cartItem.length
    }
}

function remove(id) {
    localStorage.removeItem(`product_card_${id}`)
    showCartItems()

}
showCartItems()
show()