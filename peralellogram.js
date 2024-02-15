function peralellogramArea(){
    // 1.base input
    const pBase = document.getElementById('paralellograme-base')
    const paBase = pBase.value;;
    const base = parseFloat(paBase)
    console.log(base)

    // 2.height neya
    const pHeight = document.getElementById('paralellograme-heigth')
    const paHeight = pHeight.value;
    const height =parseFloat(paHeight);
    console.log(height)

    // area
    const area = base * height;
    console.log(area);
    // display
    const pArea = document.getElementById('p-area');
    pArea.innerText = area;
}