var oui = document.getElementById("oui");
var non = document.getElementById("non");
var maybe = document.getElementById("maybe");
var result = document.getElementById("result");
var hashtag = "";

oui.addEventListener("click",  patate);
function patate(event) {
    for(var i=0; i<7; i++){
hashtag=hashtag+"#";
result.innerHTML+=hashtag+"</br>";
console.log(hashtag)
    }
}

non.addEventListener("click", alerte1);
function alerte1() {
    alert("Oh mince!");
}
console.log(alerte1);

maybe.addEventListener("click", alerte2);
function alerte2() {
    alert("Je vous sens comme tiraillé!");
}
console.log(alerte2);