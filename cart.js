let noProducts = document.querySelector('.error')
let totalValue = document.getElementById("total");
let dataDiv = document.getElementById("datadiv");
let cartData = JSON.parse(localStorage.getItem("ecart"));
let lengthDiv = document.getElementById("numofitems");
let total = 0;
        
    function displayProducts() {
        if(!cartData) {
            noProducts.innerHTML = `<strong>Your hasn't added any products to your cart yet.Please click on <a href="index.html">Add Products to cart </a> for adding new products to your cart<strong>`;
            noProducts.style.textAlign = "center";
            noProducts.style.fontSize = "36px";
    }

        let div = document.createElement("div");
        let lengthP = document.createElement("p");

        
        cartData.forEach(function(cartProduct) {
            // console.log('cartProduct:', cartProduct)
            
            let itemName = document.createElement("p");
            itemName.innerHTML = cartProduct.productName;
            
            let itemImage = document.createElement("img");
            itemImage.src = cartProduct.productImage;
            
            let itemPrice = document.createElement("p");
            itemPrice.innerHTML = cartProduct.productPrice;
            total += Number(cartProduct.productPrice.replace(",", ""));

            div.append(itemImage,itemPrice,itemName);
            dataDiv.append(div);
            
        });
        //calculating the total no.products in the cart
        lengthDiv.innerHTML = `Total number of items added to the cart is <strong>${cartData.length}</strong>`
        
        //calculating the total value of the cart
        totalValue.innerHTML = `<h2>Your total Value is ${total}` ;
        
        totalValue.classList.add('total-value')
        lengthDiv.classList.add('products-len')



    }
    
    //Once the user applies the coupon code if it matches to the existing saved coupon code then he will get discont of 30%

    function discount() {
        let couponCode = document.querySelector("input").value;
        // let totalAmount = document.querySelector(".total-amount");
        let totalDiscount = document.createElement("p");
        let totalAmount = document.createElement("p");
        let discountMessage = document.querySelector(".discountMessage");

        if(couponCode === "masai30"){
            let discountedPrice = total * 30 / 100;
            totalDiscount.innerHTML =  `The 30% discounted amount is <strong>-${discountedPrice}</strong>`
            totalAmount.innerHTML = `Your total amount is <strong>${total - discountedPrice}</strong>`;
            discountMessage.innerHTML = '';
            discountMessage.append(totalDiscount,totalAmount);
        } else {
            alert('Please enter a valid coupon code');
        }
    }

    //once the user click on checkout button it must redirect him to another page
    function checkout() {
        if(!cartData) {
            alert('Please add products to your cart before checkout');
            return;
        } 

            setTimeout(function() {
                window.location = 'success.html'
            }, 2000)
        }

    

    displayProducts()