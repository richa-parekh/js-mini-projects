const btn = document.getElementById('notifyBtn');
const container = document.getElementById('toastContainer');

function createToast(message, duration = 3000) {
    /* Create toast container */
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;

    /* Create close button */
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    toast.appendChild(closeBtn);

    /* Append toast to container */
    container.appendChild(toast);

    /* Delay so CSS transition applies */

    requestAnimationFrame(() => toast.classList.add("show"));

    /* Auto remove after timeout */
    const timeoutId = setTimeout(() => {
        removeToast(toast);
    }, duration);

    /* Manually close. Cancel timeout */
    closeBtn.addEventListener("click", () => {
        clearTimeout(timeoutId);
        removeToast(toast);
    });
}

function removeToast(toast) {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300); // Wait for fade-out
}

btn.addEventListener("click", () => {
    createToast("✅ Profile updated successfully", 4000);
});