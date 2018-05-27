/* global $ */
/*eslint-env browser*/

// Initialisierung der DOM Objekte
var $abacus = $('#abacus');
var $abcframe = $abacus.find('.abacus-frame');
var counter = $abacus.find('.count');
var $inputbutton = $abacus.find('.inputbox');
$inputbutton.append('&emsp;<input type="text" id="zahl"/>&emsp;<input type="button" value="rechne" id="rechne"/>')
var kugeln = 0;


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

$lines.find('.balls').on('click', setKugeln);

function setKugeln() {
    if (!$(this).hasClass('movetoRight')) {
        $(this).nextAll().add(this).removeClass('movetoLeft').addClass('movetoRight');

        $(this).nextAll().add(this).on('webkitTransitionEnd transitionend', function () {


        });
    } else if (!$(this).hasClass('movetoLeft')) {
        $(this).prevAll().add(this).addClass('movetoLeft').removeClass('movetoRight');


        $(this).on('webkitTransitionEnd transitionend', function () {


        });
    }
    checkStatus();
}

function checkStatus() {
    for (var i = 0; i < 5; i++) {
        switch (i) {
            case 0:
                laenge = $("#zehntausend").children(".movetoRight").length;
                zehntausend = laenge * 10000;

                break;
            case 1:
                laenge = $("#tausend").children(".movetoRight").length;
                tausend = laenge * 1000;
                if (laenge == 10) {
                    ueberlauf(10000);
                }
                break;
            case 2:
                laenge = $("#hundert").children(".movetoRight").length;
                hundert = laenge * 100;
                if (laenge == 10) {
                    ueberlauf(1000);
                }
                break;
            case 3:
                laenge = $("#zehner").children(".movetoRight").length;
                zehner = laenge * 10;
                if (laenge == 10) {
                    ueberlauf(100);
                }
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
    switch (zahl) {
        case 10:
            setTimeout(function () {
                left('#einser > div', 10);

            }, 2900)
            setTimeout(function () {
                right('#zehner > .movetoLeft', 1);

            }, 2900)
            break;
        case 100:
            setTimeout(function () {
                left('#zehner > div', 10);

            }, 2900)
            setTimeout(function () {
                right('#hundert > .movetoLeft', 1);

            }, 2900)
            break;
        case 1000:
            setTimeout(function () {
                left('#hundert > div', 10);

            }, 2900)
            setTimeout(function () {
                right('#tausend > .movetoLeft', 1);

            }, 2900)
            break;
        case 10000:
            setTimeout(function () {
                left('#tausend > div', 10);

            }, 2900)
            setTimeout(function () {
                right('#zehntausend > .movetoLeft', 1);

            }, 2900)


            break;
    }

}

//right('#einser > div',10);
//left('#einser > div',10);
function right(string, wert) {
    $(string).slice(-wert).removeClass('movetoLeft').addClass('movetoRight');

    $(string).on('webkitTransitionEnd transitionend', function () {


    });
}

function left(string, wert) {
    $(string).slice(-wert).removeClass('movetoRight').addClass('movetoLeft');

    $(string).on('webkitTransitionEnd transitionend', function () {


    });
}




function rechne(kugeln) {
    var inputZahl;
    var ergebnis;

    $('#rechne').click(function () {
        inputZahl = parseInt($("#zahl").val());
        
        ergebnis = kugeln + inputZahl;
        setKugeln2(ergebnis);
       
        counter.text(ergebnis);

    });

}




function setKugeln2(num) {
    var digits = (num + "").length;
    
    switch (digits) {
        case 1:
            var einser = num;
            $('#einser > div').slice(-einser).removeClass('movetoLeft').addClass('movetoRight');

            $('#einser > div').on('webkitTransitionEnd transitionend', function () {});
            break;

        case 2:
            var zehner = (num - num % 10) / 10;
            $('#zehner > div').slice(-zehner).removeClass('movetoLeft').addClass('movetoRight');

            $('#zehner > div').on('webkitTransitionEnd transitionend', function () {


            });
            num = num % 10;
            setKugeln2(num);
            break;

        case 3:

            var hundert = (num - num % 100) / 100;
            $('#hundert > div').slice(-hundert).removeClass('movetoLeft').addClass('movetoRight');
            
            $('#hundert > div').on('webkitTransitionEnd transitionend', function () {


            });
            num = num % 100;
            setKugeln2(num);
            break;
        case 4:
            var tausend = (num - num % 1000) / 1000;
            $('#tausend > div').slice(-tausend).removeClass('movetoLeft').addClass('movetoRight');
            
            $('#tausend > div').on('webkitTransitionEnd transitionend', function () {


            });
            num = num % 1000;
            setKugeln2(num);
            break;
        case 5:
            var zehntausend = (num - num % 10000) / 10000;
            $('#zehntausend > div').slice(-zehntausend).removeClass('movetoLeft').addClass('movetoRight');
          
            $('#zehntausend > div').on('webkitTransitionEnd transitionend', function () {


            });
            num = num % 10000;
            setKugeln2(num);
            break;

        default:
            alert("fehler");

            break;
    }
}