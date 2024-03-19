document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button") 

    function randomBgColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        return bgColor;
    }

    const hover = document.querySelectorAll(".button");
    hover.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            element.style.backgroundColor = randomBgColor();
        });
    });
});