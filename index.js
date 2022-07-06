let glassix = document.getElementById("glassix-container");
let chatGreeting = document.getElementById("chatGreetinPopup");
let isChatVisible= false;
isNewMessage = false;
let isFirstLoad= true;
window.addEventListener('click', closeChatGreeting);

function onload(){
    chatVisibilityChanged(false);
}

function openChatPopup() {
    widgetClient.setWidgetVisiblity(true);
    closeChatGreeting();
}

function closeChatGreeting() {
    chatGreeting.classList.remove("open-popup");
    timerForProductsPages(15000);
}

function timerForProductsPages(timeInMs=0){
    if (window.location?.href.toLowerCase().includes('products') ) {
       setTimeout(() => {
            if(!isChatVisible && !isNewMessage){
                chatGreeting.classList.add("open-popup");
            }
        }, timeInMs);
    }
}

function chatVisibilityChanged(event){
    isChatVisible = event;
    console.log('visib');
    if(!event && !isFirstLoad){
        timerForProductsPages(15000);
        console.log('1111visib');
    } else if(!event && isFirstLoad){
        timerForProductsPages(5000);
        isFirstLoad = false;
        console.log('2222visib');
    }
}

function newMessage(){
    isNewMessage=true;
}
