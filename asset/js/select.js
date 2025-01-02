// 變數保存當前選中的主圖片
let currentMainImage = '';

// 獲取 URL 中的參數
function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderProductDetail(model) {
    fetch("../asset/data/product.json")
        .then((response) => response.json())
        .then((data) => {
            let product = null;

            // 遍歷所有品牌，找到匹配的產品
            for (const brand in data) {
                product = data[brand].find((item) => item.model === model);
                if (product) break;
            }

            if (!product) {
                console.error("Product not found");
                document.body.innerHTML = `<h1>產品未找到</h1>`;
                return;
            }

            // 初始化主圖片
            const mainImage = document.getElementById("main-image");
            mainImage.src = `../asset/img/product/${product.images[0]}`; // 設置主圖片
            currentMainImage = mainImage.src; // 記錄當前主圖片

            // 動態生成縮圖
            const thumbnailContainer = document.querySelector(".thumbnail-container");
            thumbnailContainer.innerHTML = product.images
                .map(
                    (image) =>
                        `<img 
                            class="thumbnail" 
                            src="../asset/img/product/${image}" 
                            alt="${product.model}" 
                            onmouseover="hoverThumbnail('${image}')" 
                            onmouseout="resetThumbnail()" 
                            onclick="selectThumbnail('${image}')"
                        >`
                )
                .join("");

            // 設置第一個縮圖為選中狀態
            selectThumbnail(product.images[0]);

            // 更新名稱與價格
            document.querySelector(".product-name").innerText = product.model;
            document.querySelector(".product-price").innerText = `NT$${product.price}`;

            // 更新顏色按鈕
            const colorOptions = document.querySelector(".colors");
            colorOptions.innerHTML = product.colors
                .map(
                    (color, index) =>
                        `<button 
                            class="color-btn" 
                            data-color="${color}" style="background-color: #151515; "
                            onclick="selectColor(this, '${product.images[index]}')">${color}</button>`
                )
                .join("");

            // 更新商品描述
            const introContent = document.querySelector(".intro-content");
            introContent.innerHTML = product.features.map((feature) => `<div>${feature}</div>`).join("");

            // 更新商品規格
            const productData = document.querySelector(".product-data");
            productData.innerHTML = `
                <div style="font-weight: 700;">商品規格</div>
                <div>配件：${product.specifications.accessories.join("、")}</div>
                <div>重量(kg)：${product.specifications.weight}</div>
                <div>尺寸(cm)：${product.specifications.dimensions}</div>
                <div>藍牙技術：${product.specifications.bluetooth.version}</div>
                <div>藍牙連接範圍(m)：${product.specifications.bluetooth.range}</div>
            `;
        })
        .catch((error) => console.error("Error loading product data:", error));
}

// 更新主圖片並同步縮圖樣式
function selectThumbnail(image) {
    const mainImage = document.getElementById("main-image");
    currentMainImage = `../asset/img/product/${image}`; // 更新當前選中的主圖片
    mainImage.src = currentMainImage;

    // 移除所有縮圖的選中狀態
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => {
        if (mainImage.src === thumbnail.src) {
            thumbnail.classList.add("selected-thumbnail");
        } else {
            thumbnail.classList.remove("selected-thumbnail");
        }
    });
}

// 定義 hoverThumbnail 函數
function hoverThumbnail(imagePath) {
    document.getElementById("main-image").src = `../asset/img/product/${imagePath}`; // 暫時更新主圖片
}

// 定義 resetThumbnail 函數
function resetThumbnail() {
    document.getElementById("main-image").src = currentMainImage; // 恢復到當前選中的主圖片
}

// 更新選中顏色
function selectColor(element, imagePath) {
    document.querySelectorAll(".color-btn").forEach((btn) => {
        btn.classList.remove("active");
    });
    element.classList.add("active");
    selectThumbnail(imagePath); // 更新主圖片和縮圖選中樣式
}

// 初始化頁面
const model = getQueryParameter("model");
if (model) {
    renderProductDetail(model);
} else {
    document.body.innerHTML = `<h1>缺少產品型號參數</h1>`;
}
