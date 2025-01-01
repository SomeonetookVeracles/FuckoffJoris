// content
const imageUrl = "C:\Users\Owen Borgos\Desktop\Coding Projects\FuckoffJoris\FuckoffJoris\joris.jpg"
let timeout;

const popup = document.createElement("img");
popup.src = imageUrl;
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.zIndex = "10000";
popup.style.cursor = "pointer";

popup.addEventListener("click", () => {
    clearTimeout(timeout);
    document.body.removeChild(popup);
});

document.body.removeChild(popup);

timeout = setTimeout(() => {
    browser.runtime.sendMessage({ closeTab:true});

}, 10000); //10 seconds to end this fucker.



