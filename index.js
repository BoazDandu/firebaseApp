
var root = document.getElementById('root');

var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'indigo', 'violet'];

var boxes = document.querySelectorAll('.box');

var color;

boxes.forEach((element, index) => {
    element.style.backgroundColor = colors[index % colors.length];

    element.addEventListener('click', (e) => {
        document.querySelector('body').style.backgroundColor = element.style.backgroundColor;
    });
})

const rotate = () => {
    document.getElementById('clockWise').style.transform = "rotate(360deg)";
}

const resetOptions = () => {            
    setTimeout(function() {
        document.querySelector('body').style.backgroundColor = "transparent";
        window.location.reload();
    }, 3000)
}

