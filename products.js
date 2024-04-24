async function fetchProducts() { 
    const response = await fetch("https://ecommerce-samurai.up.railway.app/product");

    const data = await response.json();
    const products = data.data;
    return products;
}





async function renderProducts() { 
    const products = await fetchProducts();
    const productsList = document.querySelector("#all-products-list")
    
    productsList.innerHTML = `<div class="product">
    <img src="assets/product-img.jpg" alt="" class="product__img" />
        <div class="product__details">
            <h3 class="product__details__title">Black and White Lamp</h3>
            <span class="product__details__price"> $986 </span>
        </div>
    </div>`;
    console.log(productsList);
}

renderProducts()
