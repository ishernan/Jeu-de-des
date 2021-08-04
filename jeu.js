const rejouer   = document.querySelector('#rejouer'); 
const de1       = document.querySelector('#de1'); 
const de2       = document.querySelector('#de2'); 
const roulezDes = document.querySelector('#roulez-des'); 
const points1   = document.querySelector('#points-1');
const points2   = document.querySelector('#points-2');
const select1   = document.querySelector('#select1');
const select2   = document.querySelector('#select2');
let player1, player2;


roulezDes.addEventListener('click', ()=>{
  jeuDe(); 
})

rejouer.addEventListener('click', ()=>{
  de1.style.display = 'none'; 
  de2.style.display = 'none'; 
} )

select1.addEventListener('click', ()=>{
  select1.style.backgroundColor = "#f1a19e"; 
  select2.style.backgroundColor = "white"; 
  player1 = true;
  player2 = false;
  
})
select2.addEventListener('click', ()=>{
  select2.style.backgroundColor = "#f1a19e"; 
  select1.style.backgroundColor = "white"; 
  player2 = true;
  player1 = false;
})

function jeuDe () { 
  let rouler1 = Math.floor((Math.random() * 6) + 1 ); 
  let rouler2 = Math.floor((Math.random() * 6) + 1 ); 

  de1.style.display = 'block';
  de2.style.display = 'block';
  de1.src = 'images/dice-' + rouler1 + '.png';
  de2.src = 'images/dice-' + rouler2 + '.png';
  
  if(player1 === true ){
    points1.textContent = rouler1+=rouler2;     
  } else if(player2===true){
    points2.textContent = rouler1+=rouler2; 
    }
  }

  

 
 