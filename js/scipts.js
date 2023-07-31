let size = 16;

function increase(value) {
    return value + 2;
}

function getInput() {
    const wordBox = document.getElementById("wordBox").value;
    return wordBox;
}

function bigLetters(string) {
    return string.toUpperCase();
}

window.onload = function() {
    let form = document.querySelector("form");
    let para = document.querySelector("#para");
    form.onsubmit = function(event){
        event.preventDefault();
        document.querySelector("div#shouts").removeAttribute("class");
        size = increase(size);
        para.style.fontSize = size + "px";
        para.innerText = bigLetters(getInput());
    }
}

