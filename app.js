/* 
Project Requirement----
change the background color by generating random number by clicking a Button
*/

// steps 

//  step 1 :  Create Onload Handler
window.onload = () =>{
    main();
}
function main(){

    const root = document.getElementById("root");
    const btn = document.getElementById("chnage-btn");
    btn.addEventListener("click",function(){
        const bgColor = generateRandomRGBColor();
        root.style.backgroundColor = bgColor;
    })

}
//  steps 2 : random color generator function 
function generateRandomRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red} , ${green} , ${blue})`;
}
// step 3 : collect all necessary reference
// step 4 : handle the click event
