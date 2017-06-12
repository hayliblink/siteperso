var table = document.getElementById("IciLeTexte");

var add = document.getElementById("add");
var del = document.getElementById("del");
var more = document.getElementById("more");
var less = document.getElementById("less");
var fontSize = 16;



add.addEventListener("click", adds);
function adds() {
    var element = table.lastChild;
 element.innerHTML += "<td>Texte 1</td>";
}


del.addEventListener("click", suppr);
function suppr() {
var element = table.lastChild.lastChild;
table.lastChild.removeChild(element);
}


more.addEventListener("click", policePlus);
function policePlus () {
    fontSize = fontSize + 1;
    document.getElementById("IciLeTexte").style.fontSize = fontSize + "px";
}



less.addEventListener("click", policeMoins);
function policeMoins () {
    fontSize = fontSize - 1;
    document.getElementById("IciLeTexte").style.fontSize = fontSize + "px";
}