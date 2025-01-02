
        function showCartNotification() {
            const notification = document.getElementById('cart-notification');

            // 顯示通知
            notification.style.display = 'block';

            // 重置選色按鈕
            const colorButtons = document.querySelectorAll('.color-btn');
            colorButtons.forEach(button => button.classList.remove('active'));

            // 重置數量
            document.getElementById('quantity').value = '1';

            // 在2秒後隱藏通知
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        }


        function showCommentNotification() {
            const notification = document.getElementById('comment-notification');

            // 顯示通知
            notification.style.display = 'block';

            // 在2秒後隱藏通知
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000); // 2秒後隱藏
        }

        function submitComment(event) {
            event.preventDefault(); // 阻止表單的默認提交行為

            // 可以在這裡處理評論數據，例如發送到伺服器
            const comment = document.getElementById('comment').value;

            // 顯示通知
            showCommentNotification();

            // 清空評論欄
            document.getElementById('comment').value = '';

            // 重置星星評分
            const stars = document.querySelectorAll('input[name="star"]');
            stars.forEach(star => (star.checked = false));
        }



        function showCart() {
            const notification = document.getElementById('cart-notification');

            // 顯示通知
            notification.style.display = 'block';

            
            // 在2秒後隱藏通知
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        }