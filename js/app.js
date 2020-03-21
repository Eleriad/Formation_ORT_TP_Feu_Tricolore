window.onload = function () {
    var $ = function (e) {
        return document.querySelector(e);
    }

    // Fonction pour déterminer la couleur
    var setColor = function (e, c, d) {
        e.style.backgroundColor = c;
        e.style.boxShadow = d;
    }

    // Récupération des classes de chaque feu
    var feuRouge = $(".feuRouge");
    var feuOrange = $(".feuOrange");
    var feuVert = $(".feuVert");

    // Définition des couleurs
    var vert = "green";
    var orange = "orange";
    var rouge = "red";
    var fond = "rgba(0, 0, 0, 0.3)";
    var shadowVert = "0 0 20px 5px green";
    var shadowOrange = "0 0 20px 5px orange";
    var shadowRouge = "0 0 20px 5px red";
    var sansShadow = "";


    var feuVertActif = new isOn();
    var feuOrangeActif = new isOn();
    var feuRougeActif = new isOn();

    // Fonction de vérification de la valeur de du nombre entré dans le timer
    function check(n) {
        n = parseInt(n);
        while (isNaN(n)) {
            n = parseInt(prompt("enter a valid number!"));
        }
        return Math.floor(n);
    }

    // Timer
    var timerFeuRouge = check(5); // Durée du feu rouge
    var timerFeuOrange = check(3);// Durée du feu orange
    var timerFeuVert = check(5);// Durée du feu vert
    // Durée totale du feu, depuis le vert jusqu'au rouge
    var dureeTotale = timerFeuVert + timerFeuOrange + timerFeuRouge;
    var timer = timerFeuVert;

    if (timerFeuVert && timerFeuOrange && timerFeuRouge) {
        var i = 1;
        var intr = setInterval(function () {
            if (i <= timerFeuVert) {
                if (feuRougeActif.getOn()) {
                    timer = timerFeuVert;
                }

                feuOrangeActif.setOn(false);
                feuRougeActif.setOn(false);
                feuVertActif.setOn(true);

                // Passage au feu vert
                setColor(feuOrange, fond, sansShadow);
                setColor(feuRouge, fond, sansShadow);
                setColor(feuVert, vert, shadowVert);
            }
            else if (i > timerFeuVert && i <= timerFeuVert + timerFeuOrange) {
                if (feuVertActif.getOn()) {
                    timer = timerFeuOrange;
                }

                feuVertActif.setOn(false);
                feuRougeActif.setOn(false);
                feuOrangeActif.setOn(true);


                // Passage au feu orange
                setColor(feuVert, fond, sansShadow);
                setColor(feuRouge, fond, sansShadow);
                setColor(feuOrange, orange, shadowOrange);
            }
            else {
                if (feuOrangeActif.getOn()) {
                    timer = timerFeuRouge;
                }

                feuVertActif.setOn(false);
                feuOrangeActif.setOn(false);
                feuRougeActif.setOn(true);


                if (timer == timerFeuRouge - 1) {
                    setSubColor("vert");
                }
                if (timer == 1)

                    // Passage au feu rouge
                    setColor(feuVert, fond, sansShadow);
                setColor(feuOrange, fond, sansShadow);
                setColor(feuRouge, rouge, shadowRouge)
            }
            i++;

            // Une fois le timer arrivé à son terme, remise à zéro du processus
            if (i - 1 >= dureeTotale)
                i = 0;
        }, 1000);
    } else {
        alert("error, don't input 0")
    }
}

// Helper
var isOn = function () {
    this.on = false;
    this.setOn = function (b) {
        this.on = b;
    }
    this.getOn = function () {
        return this.on;
    }
}