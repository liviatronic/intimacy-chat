var shareLink = document.getElementById("share-link");
if (typeof (shareLink) != 'undefined' && shareLink != null) {
    shareLink.innerHTML =
        window.location.href;
}

function elementHide() {
    var element = document.getElementById("text-container");
    element.classList.add("hide");

    var promptz = document.querySelector(".prompt-container");
    document.querySelector(".prompt").innerHTML = prompts[0];
    promptz.classList.add('show');
}

var n = 0;

function promptNext() {
    var element = document.querySelector(".prompt");

    if (n < prompts.length - 1) {
        n++;
        document.querySelector(".prompt").innerHTML = prompts[n];
    } else {
        n = 0;
        document.querySelector(".prompt").innerHTML = prompts[0];
    }
}

const prompts = [
    "tell me who they are",
    "tell me about the last time you were together",
    "tell me something they don’t know about you",
    "tell me what makes you feel close",
    "tell me what makes you feel in control",
    "tell me how your skin feels"
]