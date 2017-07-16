function showPic(whichPic){
var source = whichPic.getAttribute("href");
var placeholder = document.getElementById("placeholder");
placeholder.setAttribute("src", source);

}

var para = document.createElement("p");
para.textContent = "para inserted from js";
document.body.appendChild(para);

function fullScreen(element){
    var div = document.createElement('div');
    div.style.height = '100vh';
    document.body.appendChild(div);
    return div;
}

function input(inputType, DOMElement, callback){
    
}
div.addEventListener('mousemove', function(event){
    console.log(event);
    var x = event.clientX;
    var y = event.clientY;
    div.textContent = x + ", " + y;
    div.style.background = 'rgb(' + x + ', ' + y + ', 100)';
})