function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (let cookie of cookies) {
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
function updateUserButtons() {
    const isLoggedIn = getCookie("loggedIn") === "true";

    // 獲取按鈕元素
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // 根據狀態更新顯示
    if (isLoggedIn) {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
    } else {
        loginBtn.style.display = "block";
        logoutBtn.style.display = "none";
    }
}
function login() {
    setCookie("loggedIn", "true", 1); // 設置已登入狀態，保存 1 天
    updateUserButtons();
    alert("登入成功！");
}

function logout() {
    deleteCookie("loggedIn"); // 刪除登入狀態
    updateUserButtons();
    alert("已登出！");
}
window.onload = updateUserButtons;
