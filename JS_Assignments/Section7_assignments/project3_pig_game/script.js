'use strict';

// Selecting elements
const scoreelement0 = document.querySelector('#score--0');
const scoreelement1 = document.getElementById('score--1');
const currentelement0 = document.getElementById('current--0');
const currentelement1 = document.getElementById('current--1');
const diceelement = document.querySelector('.dice');
const playerelement0 = document.querySelector('.player--0');
const playerelement1 = document.querySelector('.player--1');

const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let scores, currentscore, activeplayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;
  scoreelement0.textContent = 0;
  scoreelement1.textContent = 0;
  currentelement0.textContent = 0;
  currentelement1.textContent = 0;

  diceelement.classList.add('hidden');
  playerelement0.classList.remove('player--winner');
  playerelement1.classList.remove('player--winner');
  playerelement0.classList.add('player--active');
  playerelement1.classList.remove('player--active');

};


init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  playerelement0.classList.toggle('player--active');
  playerelement1.classList.toggle('player--active');
};

// Rolling dice
btnroll.addEventListener('click', function () {
  if (playing) {
    //Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    diceelement.classList.remove('hidden');
    diceelement.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    } else {
        switchplayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

    
    if (scores[activeplayer] >= 10) {
    
      playing = false;
      diceelement.classList.add('hidden');

      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    } else {

      switchplayer();
    
    }
  }
});

btnnew.addEventListener('click', init);
