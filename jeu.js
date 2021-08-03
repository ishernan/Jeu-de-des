const rejouer = document.querySelector('#rejouer'); 
const de1 = document.querySelector('#de1'); 
const de2 = document.querySelector('#de2'); 
const roulezDes = document.querySelector('#roulez-des'); 
const points1= document.querySelector('#points-1');
const points2= document.querySelector('#points-2');


roulezDes.addEventListener('click', ()=>{
  jeuDe(); 
})


rejouer.addEventListener('click', ()=>{
  de1.style.display = 'none'; 
  de2.style.display = 'none'; 
} )



function jeuDe () { 
  let rouler1 = Math.floor((Math.random() * 6) + 1 ); 
  let rouler2 = Math.floor((Math.random() * 6) + 1 ); 

  de1.style.display = 'block';
  de2.style.display = 'block';
  de1.src = 'images/dice-' + rouler1 + '.png';
  de2.src = 'images/dice-' + rouler2 + '.png';
  points1.textContent = rouler1; 
  points2.textContent = rouler2; 

  }

 
 