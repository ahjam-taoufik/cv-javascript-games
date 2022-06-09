//transforme cases de nodelist en tableaux
let cases = [...document.getElementsByClassName('case')];

let joueur=document.getElementById('joueur');
let joueur2=document.getElementById('score1');
let joueur3=document.getElementById('score2');
let joueur4=document.getElementById('scoreNull');

let state={
    joueurEnCours:1,
    scoreJ1:0,
    scoreJ2:0,
    matchNuls:0,
    c1:0,c2:0,c3:0,c4:0,c5:0,c6:0,c7:0,c8:0,c9:0
};

const jouerCase=(e)=>{
    console.log(e.target.id);

}

cases.forEach(el=>{
    el.addEventListener('click',jouerCase)
});