let noProducts = document.querySelector('.error')

        
            
        
        //creating a variable and assigning the div id to it
        let dataDiv =document.getElementById("datadiv");

        //Accessing all the items from the localStorage withe the id Products abd assigning it to a variable
        const products = JSON.parse(localStorage.getItem("products"));

        // A function to display the products on the body
        function display() {
            if(!products) {
                // console.log("No");
                noProducts.innerHTML = `<strong>Your hasn't added any products yet.Please click on <a href="form.html">Add Products </a> for adding new products<strong>`;
                noProducts.style.textAlign = "center";
                noProducts.style.fontSize = "36px";
            }
            //a forEach to loop through the products and append on body
            products.forEach(function (pData) {
                let div = document.createElement("div");
                
                //assigning the productName value to the pName variable
                let pName = document.createElement("p");
                pName.innerHTML = pData.productName;

                //assigning the productImage value to the pImage variable
                let pImage = document.createElement("img");
                pImage.src = pData.productImage;

                //assigning the productPrice value to the pPrice variable
                let pPrice = document.createElement("p");
                pPrice.innerHTML = pData.productPrice;

                //creating an button 
                let button = document.createElement("button");
                button.onclick = function () {
                    addtoCart(pData);
                }
                button.innerHTML = "Add to Cart";
                div.append(pImage,pName,pPrice,button);
                dataDiv.append(div);
                // console.log(pData.length);
            });

            //cretaing a new storage with an array
            if(localStorage.getItem('ecart') == null) {
                localStorage.setItem('ecart', '[]');
            }



            //adding the products to the above created storage
            function addtoCart(products) {
                let cartData = JSON.parse(localStorage.getItem('ecart'));

                //if the product is already exists then it will not add that procuct
                if (cartData.find(d => d.productName == products.productName)) {
                    // show error
                    alert("Product is already exists");
                    } else {
                        // proceed with the rest of the operation
                        cartData.push(products);
                        localStorage.setItem('ecart', JSON.stringify(cartData));
                    }
                }

     


        }
        display();