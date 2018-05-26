/* global $ */
/*eslint-env browser*/

// Initialisierung der DOM Objekte
var $abacus = $('#abacus');
var $abcframe = $abacus.find('.abacus-frame');
var counter = $abacus.find('.count');
var $inputbutton = $abacus.find('.inputbox');
$inputbutton.append('&emsp;<input type="text" name="number"/>&emsp;<input type="button" value="rechne"/>')



// Linien bilden, dem Haupt-Fenster von Abakus zuweisen
for (var i = 0; i < 5; i++) {
    $abcframe.append("<div class='lines' id='" + i + "'></div>");
}

// Zähler deklarieren
// Initialisierung von Stangen
// Kugeln den Stangen deklarieren und zuweisen
var $lines = $abacus.find('.lines');
var count = 0;
counter.text(count);
var countNumbers = function () {
    //Zähler anzeigen lassen
    for (var j = 0; j < 10; j++) {
        $lines.append("<div class='balls movetoLeft' id='" + j + "'></div>");

    }
}
//Aufruf der oben geschriebenen Funktion, um die Kugeln auf der Stange darzustellen
countNumbers();

var zehntausend = $abacus.find('.lines:nth-child(1) .balls');
var tausend = $abacus.find('.lines:nth-child(2) .balls');
var hundert = $abacus.find('.lines:nth-child(3) .balls');
var zehner = $abacus.find('.lines:nth-child(4) .balls');
var einser = $abacus.find('.lines:nth-child(5) .balls');



var ball1 = $abacus.find('.balls:nth-child(1)');
var ball2 = $abacus.find('.balls:nth-child(2)');
var ball3 = $abacus.find('.balls:nth-child(3)');
var ball4 = $abacus.find('.balls:nth-child(4)');
var ball5 = $abacus.find('.balls:nth-child(5)');
var ball6 = $abacus.find('.balls:nth-child(6)');
var ball7 = $abacus.find('.balls:nth-child(7)');
var ball8 = $abacus.find('.balls:nth-child(8)');
var ball9 = $abacus.find('.balls:nth-child(9)');
var ball10 = $abacus.find('.balls:nth-child(10)');



//Events anhängen
//Verschiebe die Kugeln, adde Klassen mit Transitionen jeweils nach rechts bzw. links
//Warte bis die Transition zu Ende ist, danach erst wieder "Klicken" erlauben
var animationDone = false;
$lines.find('.balls', '.lines').on('click', moveBalls);

function moveBalls() {
    if (!animationDone) {
        if (!$(this).hasClass('movetoRight')) {
            var lineID = $(this).parent().attr('id');
            console.log(lineID);
           
            var ballID = $(this).attr('id'); //6
            console.log(ballID);
            
            var zaehler = 10;
            for (; ballID <= zaehler; zaehler--) {
            
                var lastBall= $(this).parent().find('#id').val(zaehler);
                 
                    console.log(lastBall);
                    
                    switch(lineID) {
                   
                    
                    case 0:
                    console.log("zehntausend");

                    $(this).addClass('movetoRight').removeClass('movetoLeft');
                    animationDone = true;
                    $(this).on('webkitTransitionEnd transitionend', function () {
                        animationDone = false;
                        CountBallsPlus($(this));
                    });
                        break;

                    case 1:
                    console.log("tausend");
                        break;
                    case 2:
                    console.log("tausend");
                        break;
                    case 3:
                    console.log("zehner");
                        break;
                    case 4:
                    console.log("einser");
                        break;

                   
                }

               
               }
                
            }


        } else {
            $(this).removeClass('movetoRight').addClass('movetoLeft');
            animationDone = true;
            $(this).on('webkitTransitionEnd transitionend', function () {
                CountBallsMinus($(this));
            });
        }
    }

/* $lines.find('.balls').on('click', function moveBalls() {
        if (!$(this).hasClass('movetoRight')) {
            $(this).addClass('movetoRight').removeClass('movetoLeft');
                CountBallsPlus($(this));
        } else {
            $(this).removeClass('movetoRight').addClass('movetoLeft');
                CountBallsMinus($(this));
        }
}); */


//Darstellung von Zahlen (Plus-Variante)
function CountBallsPlus(isClicked) {
    if (isClicked.is(zehntausend)) {
        count = count + 10000;
        counter.text(count);
    } else if (isClicked.is(tausend)) {
        count = count + 1000;
        counter.text(count);
    } else if (isClicked.is(hundert)) {
        count = count + 100;
        counter.text(count);
    } else if (isClicked.is(zehner)) {
        count = count + 10;
        counter.text(count);
    } else if (isClicked.is(einser)) {
        count = count + 1;
        counter.text(count);
    }
}

//Darstellung von Zahlen (Minus-Variante)
function CountBallsMinus(isClicked) {
    if (isClicked.is(zehntausend)) {
        count = count - 10000;
        counter.text(count);
    } else if (isClicked.is(tausend)) {
        count = count - 1000;
        counter.text(count);
    } else if (isClicked.is(hundert)) {
        count = count - 100;
        counter.text(count);
    } else if (isClicked.is(zehner)) {
        count = count - 10;
        counter.text(count);
    } else if (isClicked.is(einser)) {
        count = count - 1;
        counter.text(count);
    }
}
