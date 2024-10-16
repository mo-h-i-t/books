const textElement = document.getElementById("colorful-text");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '000000';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    textElement.style.color = getRandomColor();
}

// Change color every second (1000 milliseconds)
setInterval(changeColor, 5000);

// Initial color change
changeColor();