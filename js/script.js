// mm converter

function mmToCM() {
    let mm = document.getElementById("givenNum").value;
    const centimeter = 10;
    const ans = mm / centimeter;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "centimeters";
}

function mmToM() {
    let mm = document.getElementById("givenNum").value;
    const meter = 1000;
    const ans = mm / meter;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "meters";
}

function mmToKM() {
    let mm = document.getElementById("givenNum").value;
    const kilometre = 1000000;
    const ans = mm / kilometre;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "kilometres";
}

// cm converter

function cmToMM() {
    let cm = document.getElementById("givenNum").value;
    const millimetre = 10;
    const ans = cm * millimetre;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "millimetre";
}

function cmToM() {
    let cm = document.getElementById("givenNum").value;
    const meter = 100;
    const ans = cm / meter;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "meter";
}

function cmToKM() {
    let cm = document.getElementById("givenNum").value;
    const kilometre = 100000;
    const ans = cm / kilometre;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "killometre";
}

// meter converter

function mToMM() {
    let m = document.getElementById("givenNum").value;
    const millimetre = 1000;
    const ans = m * millimetre;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "millimetre";
}

function mToCM() {
    let m = document.getElementById("givenNum").value;
    const centimeter = 100;
    const ans = m * centimeter;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "centimeter";
}

function mToKM() {
    let m = document.getElementById("givenNum").value;
    const kilometre = 1000;
    const ans = m / kilometre;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "kilometre";
}

// kilometre converter

function kmToMM() {
    let km = document.getElementById("givenNum").value;
    const millimetre = 1000000;
    const ans = km * millimetre;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "millimetre";
}

function kmToCM() {
    let km = document.getElementById("givenNum").value;
    const centimeter = 100000;
    const ans = km * centimeter;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "millimetre";
}

function kmToM() {
    let km = document.getElementById("givenNum").value;
    const meter = 1000;
    const ans = km * meter;
    
    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "meter";
}