document.getElementsByTagName('li')[0].innerHTML ='<a href="https://www.tudogostoso.com.br/receita/62547-a-melhor-receita-de-bolo-de-chocolate.html">Bolo de Chocolate</a>';

document.getElementById("importante").textContent = "Beijinho";

var novoItem = document.createElement('li');
novoItem.textContent = 'Brownie';
document.getElementsByTagName('ul')[0].appendChild(novoItem);

document.querySelector('li').setAttribute("class", "bolo");


document.querySelector('li').setAttribute("class", "fundo");

document.getElementsByTagName('li')[4].setAttribute("class", "fundo");