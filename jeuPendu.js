var texte= ["maison" ,"enfant", "tortue", "vipere", "rallye", "citron", "fraise", "gramme", "majeur", "livres", "menhir", "pauvre", "record", "soiree", "typhon", "nymphe", "flipper","baseball"," definition", "dictionnaire", "tomber", "virement", "signature","abracadabra", "marionnette"];

var user= [];

var randomMot= 0;

win=0;


//CHOIX ORDINATEUR
function random (){
    randomMot= texte[Math.floor(Math.random()*texte.length)];
    console.log(randomMot);
}
random();


function lancerJeu () {

//AFFICHER LONGUEUR DU MOT CHOISI

    var indic = randomMot.length;
    document.getElementById("indication").innerHTML = "Le mot contient " + indic + " lettres";
}
lancerJeu();


// AFFICHER TIRETS EN FONCTION DE LONGUEUR DU MOT

function motCache () {
    document.getElementById("reponse").innerHTML= "";

    for (var i = 0; i <= randomMot.length - 1; i++) {

        var reponse = document.createElement("span");
        document.getElementById("reponse").appendChild(reponse).innerHTML = " _ ";
        reponse.id = "L" + [i];
    }
}
motCache();

var lettreU;

//ECOUTE DU JOUEUR
document.getElementById("OK").addEventListener("click", function(){
lettreU= document.getElementById("lettre").value;

lettreU= lettreU.toLowerCase();



/*var placeL= randomMot.indexOf(lettreU);
console.log(placeL);*/

//CONDITION SI APPARAIT PAS DEJA DANS LE TABLEAU
  /*  if (!TabU()) {
        user.push(lettreU);

    }*/

//AFFICHAGE REPONSE UTILISATEUR VRAI/FAUX

  var  x =0;

for (var i=0; i<randomMot.length; i++) {





    if (lettreU == randomMot[i]) {
        if (!TabU()) {
            document.getElementById("L" + i).innerHTML = lettreU;
            x++;
            win++;
            document.getElementById("lettre").value = "";
            user[i] = lettreU;
        }
    }


}

    if (win==randomMot.length){

        alert("Sauvé!");
        random();
        score=10;
        document.getElementById("essais").innerHTML= "Il vous reste "+ score + " essais.";
        lancerJeu();
        motCache();
        document.getElementById("lettre").value= "";
        win =0;

    }



    if (x==0) {
        alert("Loupé");
        scoreU();
        document.getElementById("lettre").value= "";
    }



});



//NOMBRE ESSAI/PERDU

var score= 10;

function scoreU (){
    score--;
    document.getElementById("essais").innerHTML= "Il vous reste "+ score + " essais.";
    //

    if (score == 0){
        alert("T'as PERDU t'es PENDU!");
        random();
        win= 0;
        score=10;
        document.getElementById("essais").innerHTML= "Il vous reste "+ score + " essais.";
        lancerJeu();
        motCache();
        document.getElementById("lettre").value= "";
    }
}


function TabU(i){
 //   lettreU= document.getElementById("lettre").value;

    for (var y=0; y<user.length; y++) {

        if (lettreU == user[y] && y ==i) {
            return true;
        }
    }
}

