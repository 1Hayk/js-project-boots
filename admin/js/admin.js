if(localStorage.getItem('admin') == null){
  location.href = 'login.html'

}
function show(){
  let tbody = document.getElementsByTagName('tbody')[0];
  let id = localStorage.getItem('id')
  tbody.innerHTML = ""
  
  for(let i = 1; i <= id; i++){
    
    let product = JSON.parse(localStorage.getItem(`product_${i}`))
    if(product != null){

      tbody.innerHTML += 
      `
      <tr>
        <td>${product.id}</td>
        <td>${product.price}AMD</td>
        <td>${product.name}</td>
        <td><image src = "img/${product.image}"></td>
      <td>
        <div class = "action">
          <a href = "edit.html#${product.id}" id = "edit"><i class = "fa fa-pen"></i></a>
          <a href = "#" onclick = 'remove(${product.id})' id = "delete"><i class = "fa fa-trash"></i></a>
        </div
      </td>
      </tr>
      `
    }
  }
}

show()

function remove(x){
  localStorage.removeItem(`product_${x}`)
  show()
}