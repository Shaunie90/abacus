/* global $ */
/*eslint-env browser*/

// Initialisierung der DOM Objekte
var $abacus = $('#abacus');
var $abcframe = $abacus.find('.abacus-frame');
var counter = $abacus.find('.count');
var $inputbutton = $abacus.find('.inputbox');
$inputbutton.append('&emsp;<input type="text" id="zahl"/>&emsp;<input type="button" value="rechne" id="rechne"/>')
var anzahl;


// Zahlenreihen mit ID's
for (var i = 0; i < 5; i++) {
    switch (i) {
        case 0:
            $abcframe.append("<div class='lines' id='zehntausend'></div>");
            break;
        case 1:
            $abcframe.append("<div class='lines' id='tausend'></div>");
            break;
        case 2:
            $abcframe.append("<div class='lines' id='hundert'></div>");
            break;
        case 3:
            $abcframe.append("<div class='lines' id='zehner'></div>");
            break;
        case 4:
            $abcframe.append("<div class='lines' id='einser'></div>");
            break;

    }


}

// Zähler deklarieren
// Initialisierung von Stangen
// Kugeln den Stangen deklarieren und zuweisen
var $lines = $abacus.find('.lines');
var anzahl = 0;
counter.text(anzahl);

var erstelleBaelle = function () {
    //Zähler anzeigen lassen
    for (var j = 0; j < 10; j++) {
        $lines.append("<div class='balls movetoLeft'></div>");
    }
}
//Aufruf der oben geschriebenen Funktion, um die Kugeln auf der Stange darzustellen
erstelleBaelle();
var animationDone = false;
$lines.find('.balls').on('click', moveBalls);

function moveBalls() {
    if (!animationDone) {
        if (!$(this).hasClass('movetoRight')) {
            $(this).nextAll().add(this).removeClass('movetoLeft').addClass('movetoRight');
            animationDone = true;
            $(this).nextAll().add(this).on('webkitTransitionEnd transitionend', function () {
                animationDone = false;

            });

        } else if (!$(this).hasClass('movetoLeft')) {
            $(this).prevAll().add(this).addClass('movetoLeft').removeClass('movetoRight');
            animationDone = true;

            $(this).on('webkitTransitionEnd transitionend', function () {
                animationDone = false;

            });
        }
    }
    checkStatus();
}

//$lines.find('.balls').on('click', checkStatus);


function checkStatus() {
    for (var i = 0; i < 5; i++) {
        switch (i) {
            case 0:
                zehntausend = $("#zehntausend").children(".movetoRight").length;
                zehntausend = zehntausend * 10000;
                break;
            case 1:
                tausend = $("#tausend").children(".movetoRight").length;
                tausend = tausend * 1000;
                break;
            case 2:
                hundert = $("#hundert").children(".movetoRight").length;
                hundert = hundert * 100;
                break;
            case 3:
                zehner = $("#zehner").children(".movetoRight").length;
                zehner = zehner * 10;
                break;
            case 4:
                einser = $("#einser").children(".movetoRight").length;
                ueberlauf(einser);
                break;
            default:
                alert("Fehler!");
                break;
        }
    }
    kugeln = zehntausend + tausend + hundert + zehner + einser;
    rechne(kugeln);
    counter.text(kugeln);
}

function ueberlauf(zahl) {
    if (zahl == 10) {
        moveBallsLeft(); //paremter für ID im <div class="lines" id="einser" | einser
    } else if (zahl == 100) {
        moveBallsLeft("zehner"); //paremter für ID im <div class="lines" id="zehner" | zehner
    } else if (zahl == 1000) {
        moveBallsLeft("hundert"); //paremter für ID im <div class="lines" id="hundert" | hundert
    } else if (zahl == 10000) {
        moveBallsLeft("tausend"); //paremter für ID im <div class="lines" id="tausend" | tausend
    } else if (zahl == 100000) {
        moveBallsLeft("zehntausend"); //paremter für ID im <div class="lines" id="zehntausend" | zehntausend
    }
}


function rechne(kugeln) {
    var inputZahl;
    var ergebnis;

    $('#rechne').click(function () {
        inputZahl = parseInt($("#zahl").val());

        console.log(inputZahl);
        console.log(kugeln);
        ergebnis = kugeln + inputZahl;
        console.log(ergebnis);
        counter.text(ergebnis);
    });
}

function setKugeln(){
    
}