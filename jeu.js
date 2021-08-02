// const button = document.querySelector('.btn'); 
// const numero = document.querySelector('#numero'); 



// button.addEventListener('click', ()=>{
//   jeuDe()
// })

// function jeuDe () { 
//   let de = Math.floor((Math.random() * 6) + 1 ); 
//   numero.textContent = de 
//  }

const rejouer = document.querySelector('#rejouer'); 
const de1 = document.querySelector('#de1'); 
const de2 = document.querySelector('#de2'); 

rejouer.addEventListener('click', ()=>{
  de1.style.display = 'none'; 
  de2.style.display = 'none'; 
} )