// task- get  the base, height and with formula calculate the area of a triangle. formula is given area= 0.5*b*h

// step-01: jei button e click korle kaaj hobe oi button e function declear kore angta lagano
//  step-02: get the value
// 2.1- input field e id 
// 2.2- id diye call kora
// 2.3- amar input er maan lagbe so input e innerText doesnt work so value diyechi
// 2.4- triangle er base float eo thakte pare so parseFloat used

// step-4: get the height
// step-5: apply formula
// step-6: display formula on the website




function calculateTriangle(){
    // const triangleBaseInput = document.getElementById('triangle-base');
    // // input field e text value hishebe thake so value ta nite hobe
    // const triangleValue = triangleBaseInput.value;
    // // input er value always string so num e convart korbo parseInt or parseFloat diye
    // const base = parseFloat(triangleValue)
    // console.log(triangleValue);


    const base = parseFloat(document.getElementById('triangle-base').value);

    console.log(base)

    // for height
    const triangleHeight = document.getElementById('triangle-height')
    const heightValue = triangleHeight.value;
    const height = parseFloat(heightValue);
    console.log(height);

    //  formula
    const area = 0.5* base * height;
    console.log('Area of the triangle is:' ,area);

    // display area on the website
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText =area;
}