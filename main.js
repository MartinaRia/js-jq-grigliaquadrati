// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function(){

  //funzione per non ripetere i numeri
  function generateRan(){

    var random = [];
    for(var i = 0;i<20 ; i++){

        var temp = Math.floor(Math.random()*20);
        console.log(temp);
        console.log(random.indexOf(temp));
        if(random.indexOf(temp) == -1){
            random.push(temp);
            console.log(random);
        } else{
         i--;
         }
    }
    console.log(random)
}

generateRan();

  /*//genera numeri e assegna la classe a quei numeri
  for (var i = 1; i <= 15 ; i++) {

    var randomNum = Math.floor(Math.random() * 64);
    $(".square").eq(randomNum).addClass("redWannabe");
    //console.log(randomNum);

  }*/


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



  // faccio cose
  // $('.square').click(
  //   function () {
  //     if($(this).hasClass('redWannabe')){
  //       $(this).css('background', 'red');
  //       redPoint++;
  //       console.log("punteggio rosso: " + redPoint);
  //       $('.prossa').html("punteggio rosso: " + redPoint);
  //     } else {
  //       $(this).css('background', 'green');
  //       greenPoint++;
  //       console.log("punteggio verde: " + greenPoint);
  //       $('.pverde').html("punteggio verde: " + greenPoint);
  //     }
  //   }
  // );





});
