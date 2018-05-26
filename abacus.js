var aArray=
[["o","o","o","o","o","o","o","o","o","o","-","-","-","-","-","-","-","-","-","-","-"],
 ["o","o","o","o","o","o","o","o","o","o","-","-","-","-","-","-","-","-","-","-","-"],
 ["o","o","o","o","o","o","o","o","o","o","-","-","-","-","-","-","-","-","-","-","-"],
 ["o","o","o","o","o","o","o","o","o","o","-","-","-","-","-","-","-","-","-","-","-"],
 ["o","o","o","o","o","o","o","o","o","o","-","-","-","-","-","-","-","-","-","-","-"]];

erstelleAbakus(aArray);
 
 function erstelleAbakus(){
    console.log("Funktion wurde geladen");
    var tabelle='';
  
  
    for (var i = 0; i < aArray.length; i++)
    {
        tabelle += "<tr id='"+i+"'>";
        for (var j = 0; j < aArray[i].length; j++){
                tabelle += "<td id='"+j+"'onclick='tauschen("+i+","+j+")'>"+aArray[i][j]+"</td>"; 
            }
        tabelle += "</tr>";
    }
    document.write('<table id="Abakus">' +tabelle + '</table>');
}
function swap(input, index_A, index_B) {
    var temp = input[index_A];
 
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function tauschen(k,l){

    console.log(k);
    console.log(l);

    for(var i =0;i<aArray.length;i++){
        for (var j=0; j < aArray[i].length; j++){
            if(j>l){

            console.log("j:"+j);
            console.log("l:"+l);
            swap(aArray,j,l)
            l++;
            }
            
    }
   
    
}
erstelleAbakus(aArray);
}
   


    














/*

function test(id){
    var feld = document.getElementById(this.id);
    var zahl= feld.getAttribute(feld); 

    console.log(zahl);
    var ziffer1 = Math.floor(zahl/100); 
    var ziffer2 = zahl-ziffer1*100; 
    
    console.log(ziffer1); 
    console.log(ziffer2);
}


function tausche2(id,aArray){
    
    var zahl= document.getElementById(id);

    var stelle1;
    var stelle2;

    var tmp=aArray[i][j]; //tmp=[0][9]
    aArray[i][j]=aArray[i][j+1]; // [0][3]=[0][4]  ooooo-----
    aArray[i][j+1]=tmp; // [0][4]=[0][3]           oooo-o----
}

function tausche(id){
    var zelle=document.getElementById(id);
    var tmp=zelle.innerHTML;
    zelle.innerHTML=aArray[4][20];
    aArray[4][20]=tmp;
   
}

function split(){
    var nummer=document.getElementById('nummer').value;
    var neue;
    if (nummer<100000){
    neue=nummer%10000;
    }
    
}

function einser(){
        for(var i=4;i<aArray.length;i++){
            for(var j=0;i<aArray[i].length;i++){
                if(aArray[i][j]=="-"){
                  tausche(aArray[i][j],aArray[i][j-1]);
                }
            }
        }
}
}
*/