const button = document.querySelector('.btn'); 
const numero = document.querySelector('#numero'); 



button.addEventListener('click', ()=>{
  jeuDe()
})

function jeuDe () { 
  let de = Math.floor((Math.random() * 6) + 1 ); 
  numero.textContent = de 
 }