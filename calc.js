const touches = [...document.querySelectorAll('.bouton')];
const listKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur) 
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur) 
})

const calculer = (valeur) =>{
    if(listKeycode.includes(valeur)){
       switch(valeur){
           case '8':
               ecran.textContent = ""
               break
           case '13':
               const calc = eval(ecran.textContent)
               ecran.textContent = calc
               break
           default:
               const index = listKeycode.indexOf(valeur)
               const touche = touches[index]
               ecran.textContent += touche.innerHTML
       }
    }
}

window.addEventListener('error', (e) => {
    alert('erreur : ' + e.message)
})