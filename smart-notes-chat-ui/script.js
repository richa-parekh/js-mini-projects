const chatContainer = document.getElementById("chatContainer");
// ============================================
// 1. WAIT FOR PAGE TO LOAD
// ============================================
// This ensure HTML is fully loaded before JS runs
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page Loaded. JS ready');
    // Call initialization function
    init();
});

// ============================================
// 2. INITIALIZATION FUNCTION
// ============================================
function init() {
    console.log('Initializing app...');
    setupMessageForm();
}

// ============================================
// 3. MESSAGE FUNCTIONS
// ============================================
function setupMessageForm() {
    const userForm = document.getElementById("userForm")
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    // Check elements loads
    if (!chatContainer || !userForm || !sendBtn) {
        console.error('Elements not found!');
        return;
    }

    let userMessage = '';
    userForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const error = document.getElementById("error");

        // Validate user input
        userMessage = userInput.value.trim();
        if (userMessage.length > 0) {
            error.textContent = "";
        } else {
            error.textContent = "Please write something...";
            return;
        }
        
        // Create user message and ai message on submit
        sendMessage(userMessage);

        // Reset input
        userInput.value = '';
        userInput.focus();
    });
}

function sendMessage(text) {
    displayUserMessage(text);
    setTimeout(function () {
        displayAIMessage('This is test AI response message');
    }, 1000);
}

// Display user message bubble
function displayUserMessage(text) {
    let userMessageContainer = document.getElementById('userMessage');
    let template = userMessageContainer.content.cloneNode(true);
	template.querySelector(".text").textContent = text;
	chatContainer.appendChild(template);
    setTimeout(() => scrollToBottom(), 50);
}

// Display AI message bubble
function displayAIMessage(text) {
    let aiMessageContainer = document.getElementById('aiMessage');
    let template = aiMessageContainer.content.cloneNode(true);
	template.querySelector(".text").textContent = text;
	chatContainer.appendChild(template);
    setTimeout(() => scrollToBottom(), 50);
}

// Helper function to scroll effect
function scrollToBottom() {
    if (chatContainer) {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });
    }
}