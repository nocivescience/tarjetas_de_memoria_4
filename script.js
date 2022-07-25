const showEl=document.getElementById('show');
const addContainer=document.getElementById('add-container');
const textos=['hola mundo', 'adios mundo'];
function createCards(){
  textos.forEach((data,index)=>{
    createCard(data,index)
  })
}
function createCard(data,index){
  const card=document.createElement('div');
  if(index===0){
    card.classList.add('active')
  }
  card.innerHTML=`${data} y ${index}`
  addContainer.appendChild(card)
}
createCards();
showEl.addEventListener('click',()=>{
  setTimeout(()=>{
    addContainer.classList.add('show')
  },1000)
})