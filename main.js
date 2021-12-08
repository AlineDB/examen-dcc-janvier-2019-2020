// Nom : 
// Prénom : 
// Groupe :
const App={
    init(){
        document.documentElement.classList.add('js-enabled');
        (function () {
            const eOl = document.querySelector('#app');
            for (iCompteur=1;iCompteur<200;iCompteur+2){
                if (iCompteur % 3 === 0){
                    eOl.insertAdjacentElement('beforeend',`<li class="grid__item"></li><li class="multiple-3 grid__item animate">${iCompteur}<div class="ribbon-wrapper">
    <div class="ribbon">3</div></div></li>`);
                } else if (iCompteur % 3 === 0 && iCompteur % 9 === 0){
                    eOl.insertAdjacentElement('beforeend',`<li class="multiple-3-9 grid__item">${iCompteur}<div class="ribbon-wrapper"><div class="ribbon">3 et 9</div></div></li>`);
                } else if (iCompteur % iCompteur === 0){
                    eOl.insertAdjacentElement('beforeend',`<li data-sum="6" class="premier grid__item">${iCompteur}<div class="ribbon-wrapper"><div data-text="somme" class="ribbon">premier</div></div></li>`);
                }
            }
        })();
    }
}


App.init();



