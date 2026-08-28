function myFunction1() {
    var a = parseFloat(document.getElementById('text_1').value);
    var b = parseFloat(document.getElementById('text_2').value);
    
    var c = document.getElementById('select');
    var value = parseInt(c.options[c.selectedIndex].value);
    
    var k;
    switch (value) {
        case 1:
            k = (a + b) / 2;
            break;
        case 2:
            k = Math.sqrt(a * b);
            break;
    }

    document.getElementById('result').value = k;

    if (k >= 9) {
        document.getElementById('display').innerHTML = "hoc sinh gioi";
        document.getElementById('display').style.color = "red";
    }   
    if (k >= 7 && k < 9) {
        document.getElementById('display').innerHTML = "hoc sinh kha";
        document.getElementById('display').style.color = "blue";
    }
    if (k >= 5 && k < 7) {
        document.getElementById('display').innerHTML = "hoc sinh trung binh";
        document.getElementById('display').style.color = "yellow";
    }
}

function myFunction2() {
    document.getElementById('text_1').value = "";
    document.getElementById('text_2').value = "";
    document.getElementById('result').value = "";
    document.getElementById('display').innerHTML = "";
}