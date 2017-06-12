var btn = document.getElementById("menu");
var nav = document.getElementById("nav");
btn.addEventListener("click",AffNav) ;
nav.addEventListener("click", FermNav) ;

function AffNav(){
    if (nav.style.left == "100%"){
        nav.style.left = "80%";
    }
else {
    nav.style.left = "100%";
}
}