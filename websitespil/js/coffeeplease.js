window.addEventListener("load", showTitle);

let point;
let liv;

const kaffe1 = document.querySelector("#kaffe1_container");
const kaffe2 = document.querySelector("#kaffe2_container");
const kaffe3 = document.querySelector("#kaffe3_container");
const cola = document.querySelector("#cola_container");
const maelk = document.querySelector("#maelk_container");
const juice = document.querySelector("#juice_container");

function showTitle() {
    console.log("showTitle");

// Skjuler alle skærme
hideAllScreens();

// Viser titelskærm
document.querySelector("#start").classList.remove("hide");

// Når man klikker på knappen så går man til startGame
document.querySelector("#startknap").addEventListener("click", startGame);
}

function startGame() {
    console.log("startGame");
  
    // Skjuler alle skærme
    hideAllScreens();
  
    // nulstiller liv og point (sætter til startværdien)
    point = 0;
    liv = 3;

    // opdaterer point på htmlsiden
    document.querySelector("#mine_points").textContent = point;
    document.querySelector("mine_point").textContent = liv;

// nulstiller liv (hjerter) ved at fjerne klassen gray så de bliver "røde" igen
  document.querySelector("#heart1").classList.remove("hide");
  document.querySelector("#heart2").classList.remove("hide");
  document.querySelector("#heart3").classList.remove("hide");

   //tid starter
   document.querySelector("#time_sprite").classList.add("shrink");
   document.querySelector("#time_sprite").addEventListener("animationed")

// går til endGame når tiden er gået (når timer-animationen er færdig)
document.querySelector("#time_sprite").addEventListener("animationend", endGame);

//start faldeanimationer på elementer

kaffe1.classList.add("fald");
rnd = generateRandomNumber(5);
kaffe1.classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
kaffe1.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
kaffe1.classList.add("delay" + rnd);

kaffe2.classList.add("fald");
rnd = generateRandomNumber(5);
kaffe2.classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
kaffe2.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
kaffe2.classList.add("delay" + rnd);

kaffe3.classList.add("fald");
rnd = generateRandomNumber(5);
kaffe3.classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
kaffe3.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
kaffe3.classList.add("delay" + rnd);

cola.classList.add("fald");
rnd = generateRandomNumber(5);
cola.classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
cola.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
cola.classList.add("delay" + rnd);

maelk.classList.add("fald");
rnd = generateRandomNumber(5);
maelk.classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
maelk.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
maelk.classList.add("delay" + rnd);

juice.classList.add("fald");
rnd = generateRandomNumber(5);
juice.classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
juice.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
juice.classList.add("delay" + rnd);

 // lytter efter klik på element, gå til funktionen click hvis der klikkes
 kaffe1.addEventListener("mousedown", clickKaffe1);
 // lytter efter klik på element, gå til funktionen click hvis der klikkes
 kaffe2.addEventListener("mousedown", clickKaffe2);
 // lytter efter klik på element, gå til funktionen click hvis der klikkes
 kaffe3.addEventListener("mousedown", clickKaffe3);
 // lytter efter klik på element, gå til funktionen click hvis der klikkes
 cola.addEventListener("mousedown", clickCola);
 // lytter efter klik på element, gå til funktionen click hvis der klikkes
 maelk.addEventListener("mousedown", clickMaelk);
 // lytter efter klik på element, gå til funktionen click hvis der klikkes
 juice.addEventListener("mousedown", clickJuice);

 // når element er faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
 kaffe1.addEventListener("animationiteration", resetKaffe1);
 // når element er faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
 kaffe2.addEventListener("animationiteration", resetKaffe2);
 // når element er faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
 kaffe3.addEventListener("animationiteration", resetKaffe3);
 // når element er faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
 cola.addEventListener("animationiteration", resetCola);
 // når element er faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
 maelk.addEventListener("animationiteration", resetMaelk);
 // når element er faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
 juice.addEventListener("animationiteration", resetJuice);
}

function clickKaffe1() {
    console.log("clickKaffe1");
  
    // stopper med at lytte efter klik (fjerner eventlistener)
    kaffe1.removeEventListener("click", clickKaffe1);
  
    // afspiller carljohan lyd???????
  
    // Tæller op på point (kan også skrives: point++;)
    point = point + 1;
    // Skriver point ud (vis nyt pointtal på siden)
    document.querySelector("#mine_points").textContent = point;
  
    // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
    kaffe1.classList.add("frys");
  
    // Starter forsvind-animation på sprite
    document.querySelector("#kaffe1_sprite").classList.add("forsvind");
  
    // Går til reset funktionen når forsvind-animationen er færdig
    kaffe1.addEventListener("animationend", resetKaffe1);
  }

  function clickKaffe2() {
    console.log("clickKaffe2");
  
    // stopper med at lytte efter klik (fjerner eventlistener)
    kaffe2.removeEventListener("click", clickKaffe2);
  
    // afspiller carljohan lyd???????
  
    // Tæller op på point (kan også skrives: point++;)
    point = point + 1;
    // Skriver point ud (vis nyt pointtal på siden)
    document.querySelector("#mine_points").textContent = point;
  
    // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
    kaffe2.classList.add("frys");
  
    // Starter forsvind-animation på sprite
    document.querySelector("#kaffe2_sprite").classList.add("forsvind");
  
    // Går til reset funktionen når forsvind-animationen er færdig
    kaffe2.addEventListener("animationend", resetKaffe2);
  }

  function clickKaffe3() {
    console.log("clickKaffe3");
  
    // stopper med at lytte efter klik (fjerner eventlistener)
    kaffe3.removeEventListener("click", clickKaffe3);
  
    // afspiller carljohan lyd???????
  
    // Tæller op på point (kan også skrives: point++;)
    point = point + 1;
    // Skriver point ud (vis nyt pointtal på siden)
    document.querySelector("#mine_points").textContent = point;
  
    // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
    kaffe3.classList.add("frys");
  
    // Starter forsvind-animation på sprite
    document.querySelector("#kaffe3_sprite").classList.add("forsvind");
  
    // Går til reset funktionen når forsvind-animationen er færdig
    kaffe3.addEventListener("animationend", resetKaffe3);
  }

  function clickCola() {
    console.log("clickCola");
  
    // stopper med at lytte efter klik (fjerner eventlistener)
    cola.removeEventListener("click", clickCola);
  
    // afspiller carljohan lyd???????
  
     // Tæller ned på liv (kan også skrives: liv--;)
  // liv = liv - 1;
  // Viser opdateret antal liv på siden
  // document.querySelector("#mine_liv").textContent = liv;
  // Hvis der ikke er flere liv tilbage (hvis liv er mindre eller lig med 0)
  // => så stopper spillet (vi går til endGame)
  // if (liv <= 0) {
  //   endGame();
  // }

  // Vores hjerter hedder #heart1, #heart2, #heart3
  // Hvis der er mere end 1 liv tilbage (liv > 1), så skal det (aktuelle) hjerte have effekten "gray"
  // Det aktuelle hjerte er det hjerte der svarer til det antal liv vi har tilbage (variablen: antalLiv)
  // Vi finder det aktuelle hjerte ved at sige "#liv" + antalliv
  // Ellers går vi til funktionen gameover
  if (liv > 1) {
    document.querySelector("#heart" + liv).classList.add("gray");
    liv = liv - 1;
    console.log(liv);
  } else {
    document.querySelector("#heart" + liv).classList.add("gray");
    endGame();
  }

  
    // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
    cola.classList.add("frys");
  
    // Starter forsvind-animation på sprite
    document.querySelector("#cola_sprite").classList.add("forsvind");
  
    // Går til reset funktionen når forsvind-animationen er færdig
    cola.addEventListener("animationend", resetCola);
  }

  function clickMaelk() {
    console.log("clickMaelk");
  
    // stopper med at lytte efter klik (fjerner eventlistener)
    maelk.removeEventListener("click", clickMaelk);
  
    // afspiller carljohan lyd???????
  
     // Tæller ned på liv (kan også skrives: liv--;)
  // liv = liv - 1;
  // Viser opdateret antal liv på siden
  // document.querySelector("#mine_liv").textContent = liv;
  // Hvis der ikke er flere liv tilbage (hvis liv er mindre eller lig med 0)
  // => så stopper spillet (vi går til endGame)
  // if (liv <= 0) {
  //   endGame();
  // }

  // Vores hjerter hedder #heart1, #heart2, #heart3
  // Hvis der er mere end 1 liv tilbage (liv > 1), så skal det (aktuelle) hjerte have effekten "gray"
  // Det aktuelle hjerte er det hjerte der svarer til det antal liv vi har tilbage (variablen: antalLiv)
  // Vi finder det aktuelle hjerte ved at sige "#liv" + antalliv
  // Ellers går vi til funktionen gameover
  if (liv > 1) {
    document.querySelector("#heart" + liv).classList.add("gray");
    liv = liv - 1;
    console.log(liv);
  } else {
    document.querySelector("#heart" + liv).classList.add("gray");
    endGame();
  }

  
    // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
    maelk.classList.add("frys");
  
    // Starter forsvind-animation på sprite
    document.querySelector("#maelk_sprite").classList.add("forsvind");
  
    // Går til reset funktionen når forsvind-animationen er færdig
    maelk.addEventListener("animationend", resetMaelk);
  }

  function clickJuice() {
    console.log("clickJuice");
  
    // stopper med at lytte efter klik (fjerner eventlistener)
    juice.removeEventListener("click", clickJuice);
  
    // afspiller carljohan lyd???????
  
     // Tæller ned på liv (kan også skrives: liv--;)
  // liv = liv - 1;
  // Viser opdateret antal liv på siden
  // document.querySelector("#mine_liv").textContent = liv;
  // Hvis der ikke er flere liv tilbage (hvis liv er mindre eller lig med 0)
  // => så stopper spillet (vi går til endGame)
  // if (liv <= 0) {
  //   endGame();
  // }

  // Vores hjerter hedder #heart1, #heart2, #heart3
  // Hvis der er mere end 1 liv tilbage (liv > 1), så skal det (aktuelle) hjerte have effekten "gray"
  // Det aktuelle hjerte er det hjerte der svarer til det antal liv vi har tilbage (variablen: antalLiv)
  // Vi finder det aktuelle hjerte ved at sige "#liv" + antalliv
  // Ellers går vi til funktionen gameover
  if (liv > 1) {
    document.querySelector("#heart" + liv).classList.add("gray");
    liv = liv - 1;
    console.log(liv);
  } else {
    document.querySelector("#heart" + liv).classList.add("gray");
    endGame();
  }
  
    // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
    juice.classList.add("frys");
  
    // Starter forsvind-animation på sprite
    document.querySelector("#juice_sprite").classList.add("forsvind");
  
    // Går til reset funktionen når forsvind-animationen er færdig
    juice.addEventListener("animationend", resetJuice);
  }


  function resetKaffe1() {
    console.log("resetKaffe1");
  
    //fjerner alle klasser fra element container 
    kaffe1.classList = "";
    //fjerner alle klasser fra ekement sprite (forsvind)
    document.querySelector("#kaffe1_sprite").classList = "";
  
    // gør det muligt at sætte animationen på igen med det samme
    kaffe1.offsetHeight;
    // genstarter falde-animation (animation sættes på igen)
    kaffe1.classList.add("fald");
  
    // ny random position til element
    let rnd = generateRandomNumber(10);
    kaffe1.classList.add("pos" + rnd);
    // ny random speed
    rnd = generateRandomNumber(3);
    kaffe1.classList.add("speed" + rnd);
  
    // lytter efter klik på CarlJohan, går til funktionen clicCarlJohan hvis der klikkes
    kaffe1.addEventListener("mousedown", clickKaffe1);
  }
  
  function resetKaffe2() {
    console.log("resetKaffe2");
  
    //fjerner alle klasser fra element container 
    kaffe2.classList = "";
    //fjerner alle klasser fra ekement sprite (forsvind)
    document.querySelector("#kaffe2_sprite").classList = "";
  
    // gør det muligt at sætte animationen på igen med det samme
    kaffe2.offsetHeight;
    // genstarter falde-animation (animation sættes på igen)
    kaffe2.classList.add("fald");
  
    // ny random position til element
    let rnd = generateRandomNumber(10);
    kaffe2.classList.add("pos" + rnd);
    // ny random speed
    rnd = generateRandomNumber(3);
    kaffe2.classList.add("speed" + rnd);
  
    // lytter efter klik på CarlJohan, går til funktionen clicCarlJohan hvis der klikkes
    kaffe2.addEventListener("mousedown", clickKaffe2);
  }

  function resetKaffe3() {
    console.log("resetKaffe3");
  
    //fjerner alle klasser fra element container 
    kaffe3.classList = "";
    //fjerner alle klasser fra ekement sprite (forsvind)
    document.querySelector("#kaffe3_sprite").classList = "";
  
    // gør det muligt at sætte animationen på igen med det samme
    kaffe3.offsetHeight;
    // genstarter falde-animation (animation sættes på igen)
    kaffe3.classList.add("fald");
  
    // ny random position til element
    let rnd = generateRandomNumber(10);
    kaffe3.classList.add("pos" + rnd);
    // ny random speed
    rnd = generateRandomNumber(3);
    kaffe3.classList.add("speed" + rnd);
  
    // lytter efter klik på CarlJohan, går til funktionen clicCarlJohan hvis der klikkes
    kaffe3.addEventListener("mousedown", clickKaffe3);
  }

  function resetCola() {
    console.log("resetCola");
  
    //fjerner alle klasser fra element container 
    cola.classList = "";
    //fjerner alle klasser fra ekement sprite (forsvind)
    document.querySelector("#cola_sprite").classList = "";
  
    // gør det muligt at sætte animationen på igen med det samme
    cola.offsetHeight;
    // genstarter falde-animation (animation sættes på igen)
    cola.classList.add("fald");
  
    // ny random position til element
    let rnd = generateRandomNumber(10);
    cola.classList.add("pos" + rnd);
    // ny random speed
    rnd = generateRandomNumber(3);
    cola.classList.add("speed" + rnd);
  
    // lytter efter klik på CarlJohan, går til funktionen clicCarlJohan hvis der klikkes
    cola.addEventListener("mousedown", clickCola);
  }

  function resetMaelk() {
    console.log("resetMaelk");
  
    //fjerner alle klasser fra element container 
    maelk.classList = "";
    //fjerner alle klasser fra ekement sprite (forsvind)
    document.querySelector("#maelk_sprite").classList = "";
  
    // gør det muligt at sætte animationen på igen med det samme
    maelk.offsetHeight;
    // genstarter falde-animation (animation sættes på igen)
    maelk.classList.add("fald");
  
    // ny random position til element
    let rnd = generateRandomNumber(10);
    maelk.classList.add("pos" + rnd);
    // ny random speed
    rnd = generateRandomNumber(3);
    maelk.classList.add("speed" + rnd);
  
    // lytter efter klik på CarlJohan, går til funktionen clicCarlJohan hvis der klikkes
    maelk.addEventListener("mousedown", clickMaelk);
  }

  function resetJuice() {
    console.log("resetJuice");
  
    //fjerner alle klasser fra element container 
    juice.classList = "";
    //fjerner alle klasser fra ekement sprite (forsvind)
    document.querySelector("#juice_sprite").classList = "";
  
    // gør det muligt at sætte animationen på igen med det samme
    juice.offsetHeight;
    // genstarter falde-animation (animation sættes på igen)
    juice.classList.add("fald");
  
    // ny random position til element
    let rnd = generateRandomNumber(10);
    juice.classList.add("pos" + rnd);
    // ny random speed
    rnd = generateRandomNumber(3);
    juice.classList.add("speed" + rnd);
  
    // lytter efter klik på CarlJohan, går til funktionen clicCarlJohan hvis der klikkes
    juice.addEventListener("mousedown", clickJuice);
  }



  function endGame() {
    console.log("endGame");
  
    if (liv <= 0) {
      gameOver();
    } else if (point >= 10) {
      levelComplete();
    } else {
      gameOver();
    }


     // stop timer og fjern eventlistener
  document.querySelector("#time_sprite").classList.remove("timer");
  document.querySelector("#time_sprite").removeEventListener("animationend", endGame);

  // Fjerner alle eventlistnere fra elementerne
  kaffe1.removeEventListener("animationend", resetKaffe1);
  kaffe1.removeEventListener("animationiteration", resetKaffe1);
  kaffe1.removeEventListener("mousedown", clickKaffe1);

  kaffe2.removeEventListener("animationend", resetKaffe2);
  kaffe2.removeEventListener("animationiteration", resetKaffe2);
  kaffe2.removeEventListener("mousedown", clickKaffe2);

  kaffe3.removeEventListener("animationend", resetKaffe3);
  kaffe3.removeEventListener("animationiteration", resetKaffe3);
  kaffe3.removeEventListener("mousedown", clickKaffe3);

  cola.removeEventListener("animationend", resetCola);
  cola.removeEventListener("animationiteration", resetCola);
  cola.removeEventListener("mousedown", clickCola);

  maelk.removeEventListener("animationend", resetMaelk);
  maelk.removeEventListener("animationiteration", resetMaelk);
  maelk.removeEventListener("mousedown", clickMaelk);

  juice.removeEventListener("animationend", resetJuice);
  juice.removeEventListener("animationiteration", resetJuice);
  juice.removeEventListener("mousedown", clickJuice);


  // Fjerner alle klasser fra elementerne
  kaffe1.classList = "";
  document.querySelector("#kaffe1_sprite").classList = "";
  kaffe2.classList = "";
  document.querySelector("#kaffe2_sprite").classList = "";
  kaffe3.classList = "";
  document.querySelector("#kaffe3_sprite").classList = "";
  cola.classList = "";
  document.querySelector("#cola_sprite").classList = "";
  maelk.classList = "";
  document.querySelector("#maelk_sprite").classList = "";
  juice.classList = "";
  document.querySelector("#juice_sprite").classList = "";
}

function gameOver() {
    console.log("gameOver");
  
    document.querySelector("#kaffe1_container").classList = "";
  
    // skjuler alle skærme
    hideAllScreens();
  
    // viser gameover skærm
    document.querySelector("#game_over").classList.remove("hide");
  
    // når der klikkes på knappen spil-igen går vi til startGame
    document.querySelector("#play_again_1").addEventListener("click", startGame);
  }

  function levelComplete() {
    console.log("levelComplete");
  
    // skjuler alle skærme
    hideAllScreens();
  
    // viser levelcomplete skærm
    document.querySelector("#level_complete").classList.remove("hide");
  
    // når der klikkes på knappen spil-igen går vi til startGame
    document.querySelector("#play_again_2").addEventListener("click", startGame);
  }

  function generateRandomNumber(num) {
    let rndNumber = Math.random();
    rndNumber = rndNumber * num;
    rndNumber = Math.floor(rndNumber);
    rndNumber = rndNumber + 1;
  
    return rndNumber;
  
    // return Math.floor(Math.random()*num)+1;
  }
  
  function hideAllScreens() {
    document.querySelector("#startGame").classList.add("hide");
    document.querySelector("#gameOver").classList.add("hide");
    document.querySelector("#level_complete").classList.add("hide");
  }
  
