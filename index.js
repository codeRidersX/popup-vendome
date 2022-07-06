let glassix = document.getElementById("glassix-container");
let chatGreeting = document.getElementById("chatGreetinPopup");
window.addEventListener("click", closeChatGreeting);
function openPopup() {
  setTimeout(() => {
    console.log("open-pop after delay");

    chatGreeting.classList.add("open-popup");
  }, 5000);
}

function openChatPopup() {
  widgetClient.setWidgetVisiblity(true);
  closeChatGreeting()
}

function closeChatGreeting() {
  chatGreeting.style.display = "none";
}
