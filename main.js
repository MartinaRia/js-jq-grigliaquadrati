// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function(){


  var random = [];

  //ciclo per selezionare 15 numeri che non si ripetono
  for (var i = 1; i <= 15 ; i++){
    var num = Math.floor(Math.random()*64); //genera numero
    if(random.indexOf(num) == -1){ //se, cercando quel numero all'interno della variabile, il numero non esiste allora l'index sulla variabile sarà uguale a -1
        random.push(num); //e quindi il numero può essere inserito in variabile
    } else {
     i--; //altrimenti si torna indietro di uno nel ciclo e si rigenera un nuovo numero
    }
  }

  //ciclo per pescare i numeri dalla variabile e assegnare la classe ai quadrati con stesso index del numero pescato
  for (var i = 0; i < random.length ; i++) {

    var randomNum = random[i]
    $(".square").eq(randomNum).addClass("redWannabe");

  }


  // tenere il punteggio dei Verdi VS Rossi
  var redPoint = 0, greenPoint = 0;

  $('.square').click(
    function () {
      if($(this).hasClass('active')){
        console.log("OH! l'hai già cliccato!");
      } else if($(this).hasClass('redWannabe')){
        $(this).css('background', 'red');
        redPoint++;
        $(this).addClass('active');
        // $(this).attr('active', 'vero');
        console.log("punteggio rosso: " + redPoint);
        $('.prossa').html("punteggio rosso: " + redPoint);
      } else {
        $(this).css('background', 'green');
        greenPoint++;
        $(this).addClass('active');
        console.log("punteggio verde: " + greenPoint);
        $('.pverde').html("punteggio verde: " + greenPoint);
      }
    }
  );



});
