document.addEventListener("DOMContentLoaded", function () {
    const text = "Cientista de Dados em formação";
    let index = 0;
    function typeEffect() {
        document.getElementById("typing-text").textContent = text.substring(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
