 // 取得縮圖與主圖片的 DOM 元素
 const thumbnails = document.querySelectorAll('.thumbnail');
 const mainImage = document.getElementById('main-image');

 // 紀錄原本的主圖片路徑
 let originalSrc = mainImage.src;

 // 為每個縮圖綁定事件
 thumbnails.forEach(thumbnail => {
     // 滑鼠移入時，暫時更新主圖片
     thumbnail.addEventListener('mouseover', () => {
         mainImage.src = thumbnail.src;
     });

     // 滑鼠移出時，恢復原本的主圖片
     thumbnail.addEventListener('mouseout', () => {
         mainImage.src = originalSrc;
     });

     // 點擊事件，設定主圖片為永久圖片
     thumbnail.addEventListener('click', () => {
         originalSrc = thumbnail.src;
         // 更新縮圖的邊框樣式
         thumbnails.forEach(tn => tn.style.border = '1px solid #ccc'); // 重置其他縮圖樣式
         thumbnail.style.border = '2px solid #E1885E'; // 高亮當前縮圖
     });
 });
 function selectColor(button, color, imagePath) {
// 更新主圖片
const mainImage = document.getElementById('main-image');
if (mainImage && imagePath) {
 mainImage.src = imagePath;
}

// 移除其他按鈕的高亮樣式
const buttons = document.querySelectorAll('.color-btn');
buttons.forEach(btn => btn.classList.remove('active'));

// 為當前點擊的按鈕添加高亮樣式
if (button) {
 button.classList.add('active');
}

// 更新顏色文字顯示
const selectedColor = document.getElementById('selected-color');
if (selectedColor) {
 selectedColor.textContent = `當前選擇：${color}`;
}
}

function changeQuantity(change) {
const quantityInput = document.getElementById('quantity');
let currentValue = parseInt(quantityInput.value);

// 確保數量不低於 1
if (currentValue + change > 0) {
 quantityInput.value = currentValue + change;
}
}