function convertMM() {
    let x = document.getElementById("givenNum").value;
    let y = 10;
    let z = 1000;

    const mm = x;
    const cm = x / y;
    const m = x / z;

    document.getElementById("mm-value").innerHTML = mm;
    document.getElementById("cm-value").innerHTML = cm;
    document.getElementById("m-value").innerHTML = m;
}

function convertCM() {
    let x = document.getElementById("givenNum").value;
    let y = 10;
    let z = 100;

    const mm = x * y
    const cm = x;
    const m = x / z;

    document.getElementById("mm-value").innerHTML = mm;
    document.getElementById("cm-value").innerHTML = cm;
    document.getElementById("m-value").innerHTML = m;
}

function convertM() {
    let x = document.getElementById("givenNum").value;
    let y = 1000;
    let z = 100;

    const mm = x * y;
    const cm = x * z;
    const m = x;

    document.getElementById("mm-value").innerHTML = mm;
    document.getElementById("cm-value").innerHTML = cm;
    document.getElementById("m-value").innerHTML = m;
}