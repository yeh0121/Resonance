function changeQuantity(change) {
    const quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);

    // 檢查是否是有效數字，避免 NaN 的情況
    if (isNaN(currentValue)) {
        currentValue = 1; // 如果輸入框內非數字，則初始化為 1
    }

    // 確保數量不低於 1
    const newValue = currentValue + change;
    if (newValue > 0) {
        quantityInput.value = newValue; // 更新數量值
    }
}
