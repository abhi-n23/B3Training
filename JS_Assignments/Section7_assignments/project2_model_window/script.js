'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsshowmodal = document.querySelectorAll('.show-modal');

const closemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openmodal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for (let i = 0; i < btnsshowmodal.length; i++)
    btnsshowmodal[i].addEventListener('click', openmodal);     //function () {
        
    //     console.log('Button clicked');
    //     modal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');

    // });

btnclosemodal.addEventListener('click', closemodal);
    
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
    
// });

overlay.addEventListener('click', closemodal);
    
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
    
// });



document.addEventListener('keydown', function (event) {
    
    console.log(event.key);

    if (event.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closemodal();
        }
    }

});