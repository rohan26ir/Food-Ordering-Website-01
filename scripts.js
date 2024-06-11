let moreProductsShown = false;

function toggleMoreProducts() {
    const section = document.getElementById('most-popular-items');
    if (!moreProductsShown) {
        for (let i = 0; i < 6; i++) {
             const newFoodItem = document.createElement('div');
             newFoodItem.className = 'food-item';
             newFoodItem.innerHTML = `
                 <img src="./img/food-recipe-6.png" alt="New Product">
             <div class="food-name">
                 <h3>Enchilada</h3>
                 <p class="rating">⭐ 4.5</p>
             </div>
             <div class="add-cart">
                 <button class="add-to-cart">Add To Cart</button>
                 <p class="price">$20.00</p>
             </div>
            `;
            section.insertBefore(newFoodItem, section.lastElementChild);
        }
        document.getElementById('toggle-more').textContent = 'Hide Products';
    } else {
        const foodItems = document.querySelectorAll('#most-popular-items .food-item');
        for (let i = foodItems.length - 1; i >= foodItems.length - 6; i--) {
            foodItems[i].remove();
        }
        document.getElementById('toggle-more').textContent = 'See More Products';
    }
    moreProductsShown = !moreProductsShown;
}
