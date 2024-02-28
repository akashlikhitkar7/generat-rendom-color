let btn = document.querySelector("button");
btn.addEventListener('click',()=>{
    let rgbColor = genRandomColor()
    let h1 = document.querySelector("h1");
    h1.innerText = rgbColor;
    let bgcolor = document.querySelector("div");
    bgcolor.style.backgroundColor = rgbColor;

})

function genRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let rgb = `rgb(${red},${green},${blue})`
    return rgb;

}
