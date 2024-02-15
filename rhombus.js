// 1. button e angta lagano onclick diye
function rhombusArea (){
    // 2.d1 er input lagbe so id diye call kora
    const dWidth = document.getElementById('d-w')
    // input er maan neya
    const dValue = dWidth.value;
    const dWth = parseFloat(dValue)
    console.log(dWth);
    // 3.height neya
    const dHeight = document.getElementById('d-l')
    const dhValue = dHeight.value;
    const rhombusLength = parseFloat(dhValue)
    console.log(rhombusLength);
    // area
    
    const area = 0.5*dWth*rhombusLength;
    console.log (area);
// display 
const rArea = document.getElementById('r-area');
rArea.innerText =area;
}