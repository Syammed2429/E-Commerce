//creating the function and assigning the values
function submitForm(e) {
    e.preventDefault();
    // var productsList = []; //creating an empty array

    //creating the objet and getting the values by it's id
    let productDetails = {
        productName : document.getElementById('pname').value,
        productPrice : document.getElementById('pprice').value,
        productImage : document.getElementById('pimage').value,
    };

    if(localStorage.getItem('products') == null) {
        localStorage.setItem('products',"[]");
    }

    let productsData = JSON.parse(localStorage.getItem('products'));
    productsData.push(productDetails);
    localStorage.setItem('products',JSON.stringify(productsData))
    
    console.log('productsData:', productsData);
}