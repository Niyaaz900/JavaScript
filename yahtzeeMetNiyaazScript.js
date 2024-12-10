//const dobbelPlaatjes = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];


// elke let is een variable Vertaald html naar JS
let weergeefWorp = document.getElementById("weergeefWorp");
let weerGeefTotaleScore = document.getElementById("weerGeefTotaleScore");
let weerGeefTotaleScoreB = document.getElementById("weerGeefTotaleScoreB");
let optelKnop = document.getElementById("optelKnop");

let totaleScoreA = 0; // Score voor het bovenste gedeelte van de kaart.
let totaleScoreB = 0; // onderste gedeelte

let rondes = 6; 
let worpen = 3;

let weergeefRondes = document.getElementById("weergeefRondes")
let weergeefWorpen = document.getElementById("weergeefWorpen");

let rolDobbelSteenKnop = document.getElementById("rolDobbelSteenKnop");
let selecteerScoreKnop = document.getElementById("selecteerScoreKnop");

// achteraf beter een array kunnen gebruiken

let weergeefScore1 = document.getElementById("weergeefScore1");
let weergeefScore2 = document.getElementById("weergeefScore2");
let weergeefScore3 = document.getElementById("weergeefScore3");
let weergeefScore4 = document.getElementById("weergeefScore4");
let weergeefScore5 = document.getElementById("weergeefScore5");
let weergeefScore6 = document.getElementById("weergeefScore6");

// Selecteer zijn de ronde knoppen
let selecteer1 = document.getElementById("selecteer1");
let selecteer2 = document.getElementById("selecteer2");
let selecteer3 = document.getElementById("selecteer3");
let selecteer4 = document.getElementById("selecteer4");
let selecteer5 = document.getElementById("selecteer5");
let selecteer6 = document.getElementById("selecteer6");




// !!!

let selecteerDrieDezelfde = document.getElementById("selecteerDrieDezelfde");









// is de geselecteerde score kon met een array achteraf
let definitief1 = document.getElementById("definitief1");
let definitief2 = document.getElementById("definitief2");
let definitief3 = document.getElementById("definitief3");
let definitief4 = document.getElementById("definitief4");
let definitief5 = document.getElementById("definitief5");
let definitief6 = document.getElementById("definitief6");





//mee bezig
let definitiefDrieDezelfde = document.getElementById("definitiefDrieDezelfde");









let weergeefScoreDrieDezelfde = document.getElementById("weergeefScoreDrieDezelfde");
let weergeefScoreVierDezelfde = document.getElementById("weergeefScoreVierDezelfde");

let weergeefScoreKleineStraat = document.getElementById("weergeefScoreKleineStraat");
let weergeefScoreGroteStraat = document.getElementById("weergeefScoreGroteStraat");

//let weergeefScoreVolHuis = document.getElementById("weergeefScoreVolHuis");

let weergeefScoreKans = document.getElementById("weergeefScoreKans");
let weergeefScoreYahtzee = document.getElementById("weergeefScoreYahtzee");




// lege array
const dobbelSteenRij = [];

function rolDobbelSteen() {
  dobbelSteenRij.length = 0; // 0 anders gaat hij heletijd door

  for (let i = 0; i < 5; i++) { //5 willekeurige getallen zoekt hij in je array
    const willekeurigGetal = Math.floor(Math.random() * 6) + 1; //floor maakt hem een heel getal random is gewoon random getal
    dobbelSteenRij.push(willekeurigGetal); 
    weergeefWorp.innerText = dobbelSteenRij; //weergeeft het op het scherm
    
  }

  // Gerolde nummers
  weergeefScore1.innerHTML = optellenOgen(1);
  weergeefScore2.innerHTML = optellenOgen(2);
  weergeefScore3.innerHTML = optellenOgen(3);
  weergeefScore4.innerHTML = optellenOgen(4);
  weergeefScore5.innerHTML = optellenOgen(5);
  weergeefScore6.innerHTML = optellenOgen(6);














// checkOgen is een functie achteraf met een array
  selecteer1.disabled = true; // Deze moet boven die andere staan.
  checkOgen(1);
  selecteer1.checked = false;

  selecteer2.disabled = true;
  checkOgen(2);
  selecteer2.checked = false;

  selecteer3.disabled = true;
  checkOgen(3);
  selecteer3.checked = false;

  selecteer4.disabled = true;
  checkOgen(4);
  selecteer4.checked = false;

  selecteer5.disabled = true;
  checkOgen(5);
  selecteer5.checked = false;

  selecteer6.disabled = true;
  checkOgen(6);
  selecteer6.checked = false;


    // !!!

    weergeefScoreDrieDezelfde.innerHTML = drieDezelfde(dobbelSteenRij);
    weergeefScoreVierDezelfde.innerHTML = vierDezelfde(dobbelSteenRij);
  
  
    weergeefScoreKleineStraat.innerHTML = kleineStraat(dobbelSteenRij);
    weergeefScoreGroteStraat.innerHTML = groteStraat(dobbelSteenRij);  
  
    //weergeefScoreVolHuis.innerHTML = volHuis(dobbelSteenRij);
  
    weergeefScoreKans.innerHTML = kans();
    weergeefScoreYahtzee.innerHTML = yahtzee(dobbelSteenRij); 


  // !!!
  selecteerDrieDezelfde.disabled = true;
  selecteerDrieDezelfde.checked = false;



  //scoresOptellenOnder()




// string met een variable erin
  worpen--;
  weergeefWorpen.innerHTML = `Overige worpen ${worpen}`;
  weergeefRondes.innerHTML = `Overige rondes ${rondes}`;
  berekenRondes();
  

  weerGeefTotaleScore.innerHTML = `Je totale Score = ${totaleScoreA}`;
  weerGeefTotaleScoreB.innerHTML = `Je totale Score = ${totaleScoreB}`;
}



//werkt niet helemaal experiment wilde geen let test gebruiken
function scoresOptellenOnder() {
  if (drieDezelfde() = true) {
    selecteerDrieDezelfde.disabled = false;
    weergeefScoreDrieDezelfde.innerHTML += " 15 punten";
  } else {
    selecteerDrieDezelfde.disabled = true;
  }
}

// telt aantal gegooit en doet het aantal x aantal
let aantal = 0;
function optellenOgen(getal) {
  aantal = 0;

  for (let i = 0; i < dobbelSteenRij.length; i++) {
    if (dobbelSteenRij[i] == getal) { // 
      aantal++;
    }
  }
  return aantal * getal;
}


// kijkt of het geselecteerd is  
let test1 = false;
let test2 = false;
let test3 = false;
let test4 = false;
let test5 = false;
let test6 = false;

// kon achteraf ook simpeler als je een worp gedaan hij checkt of je dan die score kan selecteren
function checkOgen(getal) {
  for (let i = 0; i < dobbelSteenRij.length; i++) {
    if (dobbelSteenRij[i] == getal && getal == 1 && test1 == false) {
      selecteer1.disabled = false;
    }
    else if (dobbelSteenRij[i] == getal && getal == 2 && test2 == false) {
      selecteer2.disabled = false;
    }
    else if (dobbelSteenRij[i] == getal && getal == 3 && test3 == false) {
      selecteer3.disabled = false;
    }
    else if (dobbelSteenRij[i] == getal && getal == 4 && test4 == false) {
      selecteer4.disabled = false;
    }
    else if (dobbelSteenRij[i] == getal && getal == 5 && test5 == false) {
      selecteer5.disabled = false;
    }
    else if (dobbelSteenRij[i] == getal && getal == 6 && test6 == false) {
      selecteer6.disabled = false;
    } 
  }
}




function selecteerScore() {
  // achteraf kon met een for loop


 // voegt score toe en vinkt hem af
  if (selecteer1.checked) {
    totaleScoreA += optellenOgen(1);
    test1 = true;
    definitief1.innerText = "X";
    nietMeerVerder(); // test1 true en nietmeerverder zorgen ervoor dat je hem niet meer kan gebruiken
  } 
  else if (selecteer2.checked) {
    totaleScoreA += optellenOgen(2);
    test2 = true;
    definitief2.innerText = "X";
    nietMeerVerder();
  } 
  else if (selecteer3.checked) {
    totaleScoreA += optellenOgen(3);
    test3 = true;
    definitief3.innerText = "X";
    nietMeerVerder();
  } 
  else if (selecteer4.checked) {
    totaleScoreA += optellenOgen(4);
    test4 = true;
    definitief4.innerText = "X";
    nietMeerVerder();
  } 
  else if (selecteer5.checked) {
    totaleScoreA += optellenOgen(5);
    test5 = true;
    definitief5.innerText = "X";
    nietMeerVerder();
  }
  else if (selecteer6.checked) {
    totaleScoreA += optellenOgen(6);
    test6 = true;
    definitief6.innerText = "X";
    nietMeerVerder();
  }


  
// werkt niet compleet ong. zelfde als hierboven
  else if (selecteerDrieDezelfde.checked) {
    totaleScoreB += 15;
    selecteerDrieDezelfde.disabled = true;
    selecteerDrieDezelfde.checked = false;
    definitiefDrieDezelfde.innerText = "X";
    nietMeerVerder();
  }




  // tekst voor front page
  weerGeefTotaleScore.innerHTML = `Je totale Score = ${totaleScoreA}`;
  weerGeefTotaleScoreB.innerHTML = `Je totale Score = ${totaleScoreB}`;
 
  worpen = 3;
  rondes--;
  rolDobbelSteenKnop.disabled = false;

// spel afgelopen niks kan gebruikt meer worden
  if (rondes == 0) {
    alert('Spel is afgelopen!!');
    bonusPunten();
    rolDobbelSteenKnop.disabled = true;
    selecteerScoreKnop.disabled = true;
  }
}

// knop niet meer bruikbaar alles is hetzelfde
function nietMeerVerder() {
  if (test1 == true && selecteer1.checked) {
    selecteer1.disabled = true;
    selecteer1.checked = false;
  }
  else if (test2 == true && selecteer2.checked) {
    selecteer2.disabled = true;
    selecteer2.checked = false;
  } 
  else if (test3 == true && selecteer3.checked) {
    selecteer3.disabled = true;
    selecteer3.checked = false;
  }
  else if (test4 == true && selecteer4.checked) {
    selecteer4.disabled = true;
    selecteer4.checked = false;
  }
  else if (test5 == true && selecteer5.checked) {
    selecteer5.disabled = true;
    selecteer5.checked = false;
  }
  else if (test6 == true && selecteer6.checked) {
    selecteer6.disabled = true;
    selecteer6.checked = false;
  }
}

// geen worpen meer over zet hij rolknop vast en moet je eentje selecteren
function berekenRondes() {
  if (worpen == 0) {
    alert('De Ronde is voorbij, Selecteer één van de opties.');
    rolDobbelSteenKnop.disabled = true;
  }
}

//totale score boven 63 bonuspunten
function bonusPunten() {
  if (totaleScoreA >= 63) {
    alert("Je krijgt bonuspunten");
    totaleScoreA += 35;
    weerGeefTotaleScore.innerHTML = `Je totale Score = ${totaleScoreA}`;
  }
}


/*
Funkties:
Houd de dobbelstenen vast als individuele waardes.
Alle andere tel op functies toevoegen.
Nummers met ogen omwisselen.
*/




/*
◘ Overzetten naar .js bestand 
◘ Verslag schrijven
◘ Dobelstenen vasthouden, misschien aanpassen. 
◘ heel Misschien emoji's gebruiken. 

*/


















function drieDezelfde(dobbel) {
  const aantalStenen = {}; // Ein Objekt zur Zählung der Würfelwerte

  // Zähle die Häufigkeit jedes Würfelwerts
  for (let i = 0; i < dobbel.length; i++) {
    const nummer = dobbel[i];
    if (aantalStenen[nummer]) {
      aantalStenen[nummer]++;
    } else {
      aantalStenen[nummer] = 1;
    }
  }
  // Versuche hier ein zu sehen wie viele Steine es gibt
  // Überprüfe, ob ein Würfelwert dreimal vorkommt
  for (const nummer in aantalStenen) {
    if (aantalStenen[nummer] >= 3) {
      return true;
    }
  }
  return false; // Wenn kein Wert dreimal vorkommt
}


function vierDezelfde(dobbel) {
  const aantalStenen = {};

  for (let i = 0; i < dobbel.length; i++) {
    const nummer = dobbel[i];
    if (aantalStenen[nummer]) {
      aantalStenen[nummer]++;
    } else {
      aantalStenen[nummer] = 1;
    }
  }

  for (const nummer in aantalStenen) {
    if (aantalStenen[nummer] >= 4) {
      return true;
    }
  }
  return false;
}



function kleineStraat(dobbel) {
  dobbel.sort((a, b) => a - b);

  for (let i = 0; i <= dobbel.length - 4; i++) {
    if (dobbel[i] + 1 === dobbel[i + 1] &&
      dobbel[i] + 2 === dobbel[i + 2] &&
      dobbel[i] + 3 === dobbel[i + 3]) {
    
        return true; 
    } 
  }
  return false; 
}

function groteStraat(dobbel) {
  dobbel.sort((a, b) => a - b);

  for (let i = 0; i <= dobbel.length - 5; i++) {
    if (dobbel[i] + 1 === dobbel[i + 1] &&
      dobbel[i] + 2 === dobbel[i + 2] &&
      dobbel[i] + 3 === dobbel[i + 3] &&
      dobbel[i] + 4 === dobbel[i + 4]) {

      return true;
    }
  }
  return false;
}




// function tweeDezelfde(dobbel) {
//   const aantalStenen = {}; // Ein Objekt zur Zählung der Würfelwerte

//   // Zähle die Häufigkeit jedes Würfelwerts
//   for (let i = 0; i < dobbel.length; i++) {
//     const nummer = dobbel[i];
//     if (aantalStenen[nummer]) {
//       aantalStenen[nummer]++;
//     } else {
//       aantalStenen[nummer] = 1;
//     }
//   }
//   // Versuche hier ein zu sehen wie viele Steine es gibt
//   // Überprüfe, ob ein Würfelwert dreimal vorkommt
//   for (const nummer in aantalStenen) {
//     if (aantalStenen[nummer] >= 2) {
//       return true;
//     }
//   }
//   return false; // Wenn kein Wert dreimal vorkommt
// }

// function volHuis() {
//   for (let i = 0; i < dobbelSteenRij.length; i++) {
//     if (drieDezelfde() == true && tweeDezelfde() == true) {
//       return true;
//     }
//   }
//   return false;
// }



let allesOptellenKans = 0;


function kans() {
  allesOptellenKans = 0;
  for (let i = 0; i < dobbelSteenRij.length; i++) {
    allesOptellenKans += dobbelSteenRij[i];
  }
  return allesOptellenKans;
}





function yahtzee(dobbel) {
  const aantalStenen = {};

  for (let i = 0; i < dobbel.length; i++) {
    const nummer = dobbel[i];
    if (aantalStenen[nummer]) {
      aantalStenen[nummer]++;
    } else {
      aantalStenen[nummer] = 1;
    }
  }

  for (const nummer in aantalStenen) {
    if (aantalStenen[nummer] >= 5) {
      return true;
    }
  }
  return false;
}