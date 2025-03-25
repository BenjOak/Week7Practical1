class Themes {

    background;
    textColour;
    font;

    constructor(background, textColour, font) {
        this.background = background;
        this.textColour = textColour;
        this.font = font;
    }


}

function addClick(event) {
    if (event.target.id === "themeChanger") {
        document.getElementById()
    }
}

let theme1 = new Themes("#000000", "#ffffff", "open-sans");
const btn = document.getElementById("btn");
btn.addEventListener("event", eventHandlerFunction);

document.getElementById("btn").addEventListener("click", function () { alert("!"); });
