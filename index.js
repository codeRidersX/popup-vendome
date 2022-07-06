let glassix = document.getElementById("glassix-container");
let chatGreeting = document.getElementById("chatGreetinPopup");
let isChatVisible,isNewMessage = false;
let isFirstLoad= true;
window.addEventListener('click', closeChatGreeting);

function openChatPopup() {
    widgetClient.setWidgetVisiblity(true);
    closeChatGreeting();
}

function closeChatGreeting() {
    chatGreeting.classList.remove("open-popup");
    timerForProductsPages(15000);
}

function timerForProductsPages(timeInMs=0){
    if (window.location.href.includes('products') ) {
       setTimeout(() => {
            if(!isChatVisible && !isNewMessage){
                chatGreeting.classList.add("open-popup");
            }
        }, timeInMs);
    }
}

function chatVisibilityChanged(event){
    isChatVisible = event;
    if(!event && !isFirstLoad){
        timerForProductsPages(15000);
    } else if(!event && isFirstLoad){
        timerForProductsPages(5000);
        isFirstLoad = false;
    }
}

function newMessage(){
    isNewMessage=true;
}