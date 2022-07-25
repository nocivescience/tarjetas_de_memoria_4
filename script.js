const showEl=document.getElementById('show');
const hideEl=document.getElementById('hide');
const addContainer=document.getElementById('add-container');
const textos=[
  ['hola mundo', 'adios mundo','alugon dia seremos novios'],
  ['como estas', 'estoy bien'],
  ['amarillo','rojo']
];
function createCards(texto){
  texto.forEach((data,index)=>{
    createCard(data,index)
  })
}
function createCard(data,index){
  const card=document.createElement('div');
  if(index===0){
    card.classList.add('active')
  }
  card.innerHTML=`${data} y ${index}`;
  addContainer.appendChild(card)
}
textos.map((texto)=>createCards(texto))
showEl.addEventListener('click',()=>{
  setTimeout(()=>{
    addContainer.classList.add('show')
  },1000)
})
hideEl.addEventListener('click',()=>{
  setTimeout(()=>{
    addContainer.classList.remove('show')
  })
})