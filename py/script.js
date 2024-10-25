document.getElementById("myButton").onclick = function() {
    document.getElementById("message").innerHTML = "Button was clicked!";
};

document.getElementById("myButton").onmouseout = function() {
    document.getElementById("message").innerHTML = "Button was not clicked!";
};
