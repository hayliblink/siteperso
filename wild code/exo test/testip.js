var xhr = new XMLHttpRequest();
var art = document.getElementById("article");
if (xhr) {

  xhr.open('POST','http://192.168.23.96:3000/posts'); 
  xhr.setRequestHeader('Content-Type',
    'application/json; charset=utf-8');


var jsonStr = JSON.stringify({
	author: 'Zoe',
	title: 'Le canard',
	content: 'Un canard en plastique, ou canard en caoutchouc, ou encore canard de bain, est un jouet en forme de canard, le plus souvent jaune avec un bec de couleur orangée. À l’origine en caoutchouc, ils sont actuellement fabriqués dans des matières plastiques ressemblant au caoutchouc (PVC, polyéthylène). Le canard en plastique est souvent considéré comme un symbole des univers des jouets, de l’enfance, du bain. S’il est traditionnellement jaune, il en existe de nombreuses autres sortes.'

});

  xhr.send(jsonStr);
}





var xhr = new XMLHttpRequest();


if (xhr) {


  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        art.innerHTML += data.author  + "</br>" + data.title  +"</br>" + data.content + "<br>" ;
       



      } else {
        alert('Une erreur s’est produite.');
      }
    }
  };
 
  xhr.open('GET', 'http://192.168.23.96:3000/posts/73');   
  xhr.send();
}