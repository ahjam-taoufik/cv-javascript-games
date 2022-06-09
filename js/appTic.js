//transforme cases de nodelist en tableaux
let cases = [...document.getElementsByClassName('case')];

let joueur = document.getElementById('joueur');
let joueur1 = document.getElementById('score1');
let joueur2 = document.getElementById('score2');
let matchNull = document.getElementById('scoreNull');

let state = {
  joueurEnCours: 1,
  scoreJ1: 0,
  scoreJ2: 0,
  matchNuls: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};

const jouerCase = (e) => {
  let idcase = e.target.id;
  if (state[idcase] !== 0) return;

  state[idcase] = state.joueurEnCours;

  //test verifierVictoire
  const isvictoire = verifierVictoire();

  if (isvictoire === true) {
    alert('victoire de ' + state.joueurEnCours);
    resetState();
    // cases.forEach((c) => (c.textContent = ""));
    if (state.joueurEnCours === 1) {
      state.scoreJ1++;
      joueur1.innerHTML = state.scoreJ1;
    } else {
      state.scoreJ2++;
      joueur2.innerHTML = state.scoreJ2;
    }
  } else if (isvictoire === null) {
    alert('match nul');
    state.matchNuls++;
    matchNull.innerHTML = state.matchNuls;
    resetState();
    // cases.forEach((c) => (c.textContent = ""));
  } else if (isvictoire === false) {
    if (state.joueurEnCours === 1) {
      e.target.innerHTML = 'X';
      state.joueurEnCours = 2;
      joueur.innerHTML = 'Joueur 2';
    } else {
      e.target.innerHTML = 'O';
      state.joueurEnCours = 1;
      joueur.innerHTML = 'Joueur 1';
    }
  }

  console.log(state);
};

cases.forEach((el) => {
  el.addEventListener('click', jouerCase);
});

const verifierVictoire = () => {
  if (
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
  ) {
    console.log('winner !');
    return true;
  } else if (
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
};

const resetState = () => {
  joueurEnCours = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
  cases.forEach((c) => (c.textContent = ''));
};
