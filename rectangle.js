// 1. btn e angta lagano onclick diye
function rectangleArea(){
// 2. width er input neya id call kore
const rectWidth = document.getElementById('rectangle-width');
const widthValue = rectWidth.value;
const width = parseFloat(widthValue);
console.log(width);


// 3. same bhabe height neya
 const rectHeight = document.getElementById('rectangle-lenght');
 const rectHeightValue = rectHeight.value;
 const rHeight = parseFloat(rectHeightValue);
console.log(rHeight);
// 4.area
const area = width * rHeight
console.log(area);
// display area
const rectArea = document.getElementById('rect-area');
rectArea.innerText =area;
}