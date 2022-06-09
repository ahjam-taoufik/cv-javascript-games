
const heureDiv=document.getElementById("heure");
const dateDiv=document.getElementById("date");




var AffichageHeure=function(){
    let date=new Date();


    let annee=date.getFullYear();
    
    let listMois=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
    let moisString=listMois[date.getMonth()];
    
    let listJour=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
    let jourString=listJour[date.getDay()];

    let dateString=jourString+"/"+moisString+"/"+annee;


    var DeuxChiffre=function(element){
       if(element<10){
           element="0"+element;
       }
       return element;
   }

   
    let heure=date.getHours();
    let minutes=DeuxChiffre(date.getMinutes());
    let secondes=DeuxChiffre(date.getSeconds());
    let heureAffichage=heure+":"+minutes+":"+secondes;


   
    heureDiv.textContent=heureAffichage;
    dateDiv.textContent=dateString;


    setTimeout(AffichageHeure, 1000);
}

AffichageHeure();
