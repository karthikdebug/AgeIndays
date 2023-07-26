
function clickmeage(){
    var birthyear = prompt("Whats your Birth Year?");
    var resultdays = (2023 - birthyear) * 365;

    var h1 = document.createElement('h1');
    var Anstext = document.createTextNode('You are ' + resultdays + " days.");
    h1.setAttribute('id', 'clickmeage');
    h1.appendChild(Anstext);
    document.getElementById('resultbox').appendChild(h1);
}

function restbut() {
    document.getElementById('clickmeage').remove();
}

