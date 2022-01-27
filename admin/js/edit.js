let hash = location.hash
let id = hash.slice(1)



    let product = JSON.parse(localStorage.getItem(`product_${id}`))
    document.getElementById('name').value = product.name
    document.getElementById('price').value = product.price
    document.getElementById('image').value = product.image


    
function addFile(){

    let name = document.getElementById('name').value 
    let price = document.getElementById('price').value
    let image = document.getElementById('image')
    if(image.type == 'text'){
        image = image.value
    }else if(image.type == 'file'){
    image = image.files[0]['name']
    }

    let new_product = {
        
        id:id,
        name:name,
        price:price,
        image:image
    }
   
   localStorage.setItem(`product_${id}`, JSON.stringify(new_product))
   location.href = 'admin.html'

   }
   

   function remAtr() {

    let image = document.getElementById(`image`)
    image.removeAttribute('type')
    image.setAttribute('type', 'file')

    }



