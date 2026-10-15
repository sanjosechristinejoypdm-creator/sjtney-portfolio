const h1 = document.getElementById("Output")
const btn1 = document.getElementById("Button1")

btn1.addEventListener(
    "click", function(){
        Output.innerHTML="I love love matcha so much."
        Output.style.backgroundColor="Pink"
        Output.style.color="Green"
    }
)

const btn2 = document.getElementById("Button2")
btn2.addEventListener(
    "dblclick", function(){
        Output.innerHTML="Matcha lover."
        Output.style.backgroundColor="Green"
        Output.style.color="Pink"
    }
)

const Input = document.getElementById("Input1")
Input.addEventListener(
    "focus", function(){
        Input.style.backgroundColor="Pink"
    }
)

Input.addEventListener(
    "mouseout", function(){
        Input.style.backgroundColor="Green"
    }
)

Input.addEventListener(
    "input", function(){
        Output.innerHTML=
        "Tineee: " + Input.value + "!"
        Output.style.color="Green"
    }
)

const Image = document.getElementById("img1")

img1.addEventListener(
    "mouseover", function(){
        Output.innerHTML="Your mouse has reached the matcha!"
        Output.style.backgroundColor="Green"
        Output.style.color="Pink"
    }
)

img1.addEventListener(
    "mouseout", function(){
        Output.innerHTML="Your mouse has left the matcha image!"
        Output.style.backgroundColor="Pink"
        Output.style.color="Green"
    }
)