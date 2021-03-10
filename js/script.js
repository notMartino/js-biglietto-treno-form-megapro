
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');

var nomeInput = document.getElementById('name');
var kmInput = document.getElementById('km');
var etaInput = document.getElementById('eta');


var nomeTable = document.getElementById('nomeTable');
var offertaTable = document.getElementById('offertaTable');
var carrozzaTable = document.getElementById('carrozzaTable');
var codiceTable = document.getElementById('codiceTable');
var costoTable = document.getElementById('costoTable');

var prezzo = 0;

var cap = 0
var carrozza = 0;

generaBtn.addEventListener('click', function(){
    console.log('Genera');
    if(nomeInput.value && parseInt(kmInput.value) > 0 && etaInput.value){
        prezzo = kmInput.value * 0.21;
        cap = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        carrozza = Math.floor(Math.random() * (30 - 1)) + 1;

        if(etaInput.value == 0){
            prezzo = (prezzo / 100) * 80;
            offertaTable.innerHTML = 'Sconto minorenne (20%)';
        }
        else if(etaInput.value == 66){
            prezzo = (prezzo / 100) * 60;
            offertaTable.innerHTML = 'Sconto over65 (40%)';
        }
        else{
            offertaTable.innerHTML = 'Prezzo pieno';
        }

        nomeTable.innerHTML = nomeInput.value;
        carrozzaTable.innerHTML = carrozza;
        codiceTable.innerHTML = cap;
        costoTable.innerHTML = prezzo.toFixed(2) + '€';
    }
    else{
        console.log('Inserisci i dati!');
    }
});

annullaBtn.addEventListener('click', function(){
    console.log('Annulla');
    nomeTable.innerHTML = '';
    carrozzaTable.innerHTML = '';
    codiceTable.innerHTML = '';
    costoTable.innerHTML = '';
    offertaTable.innerHTML = '';
}); 