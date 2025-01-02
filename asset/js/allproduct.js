const productListContainer = document.getElementById("product-list");

// 載入 JSON 檔案
fetch("../asset/data/product.json")
    .then((response) => response.json())
    .then((data) => {
        for (const brand in data) {
            // 創建品牌區塊
            const brandSection = document.createElement("div");
            brandSection.classList.add("brand-section");
            brandSection.innerHTML = `<h3 class="brand-title" style="margin-top:48px;">${brand}</h3>`;
            const productRow = document.createElement("div");
            productRow.classList.add("row");

            // 遍歷品牌的每個產品
            data[brand].forEach((product) => {
                const productCard = document.createElement("div");
                productCard.classList.add("col-sm-6", "col-lg-4", "col-xxl-3");

                // 商品卡片內容
                productCard.innerHTML = `
            <div class="card">
                <a href="./detail.html?model=${product.model}">
                    <div class="relative">
                        <div class="card-img">
                            <img src="../asset/img/product/${product.images[0]}" alt="${product.model}">
                        </div>
                        <button type="button" class="mask-text"></button>
                    </div>
                    <div class="card-content">
                        <div class="card-name">${product.model}</div>
                        <div class="card-price">NT$${product.price}</div>
                    </div>
                </a>
                <button type="button" class="cart-btn" onclick="showCart()">加入購物車</button>
            </div>`;

                productRow.appendChild(productCard);
            });

            brandSection.appendChild(productRow);
            productListContainer.appendChild(brandSection);
        }
    })
    .catch((error) => console.error("Error loading products:", error));