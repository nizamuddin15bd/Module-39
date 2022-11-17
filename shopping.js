const addItem = () => {
    const namField = document.getElementById('product-name');
    const name = namField.value;
    // display in the ui
    displayProduct(name);
    // add to localstorage
    addproductToCart(name);

    namField.value= '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
   const cart =  localStorage.getItem('cart')
   let cartObj;
   if(cart){
        cartObj = JSON.parse(cart);
   }
   else{
       cartObj = {};
   }
   return cartObj;
}

const addproductToCart = name => {
    const cart = getCart();
    cart[name] = 1;
    // console.log(cart);
    const cartStringigied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringigied);
}