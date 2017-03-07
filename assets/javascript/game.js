
$(document).ready(function() {

 var crystalLinks = ["assets/images/turquoise.jpg","assets/images/ruby.jpg","assets/images/diamond.jpg","assets/images/yellow.jpg"];

  var win = 0;
  var loss = 0;
  var totalScore = 0;
  var targetNumber;
  var crystalNumber;

  //var gamereset = false;
  
  //$("#total-score").text(totalScore);
  $("#win").text(win);
  $("#loss").text(loss);


//get crystal imgages to appear in HTML
//creat an array of crystals and assign class, links
var crystalImages =[];

for (var j = 0; j < 4; j++) {
  
  crystalImages[j] = $("<img>"); 
  crystalImages[j].addClass("crystal-image");
  crystalImages[j].attr("src",crystalLinks[j]);
  $("#crystals").append(crystalImages[j]);
  
}


  
function reset(){

  totalScore = 0;
  $("#total-score").text(totalScore);
//get the random target score
  targetNumber = Math.floor(Math.random() * 120) + 19 ;
  $("#targetNumber").text(targetNumber);
  console.log(targetNumber);

//get random numbers for crystals
  crystalNumber = [];
  for (var i = 0; i < 4; i++) {
    crystalNumber[i]= Math.floor(Math.random() * 12) + 1;
    console.log(crystalNumber);
  //this line give values we generated to the crystal images created above
    crystalImages[i].data("crystal-value",crystalNumber[i]);
  }
}
 
  reset();



//get stored crystal value when click on crystal image
   $(".crystal-image").on("click", function() {

       
        var crystalValue = ($(this).data("crystal-value"));
         console.log(crystalValue);
         crystalValue = parseInt(crystalValue);

//Since attributes on HTML elements are strings, we must convert it to an integer before adding 
// We then add the crystalValue to the user's "totalscore" which is a global variable
// Every click from every crystal adds to the global totalscore

       totalScore += crystalValue;
       $("#total-score").text(totalScore);
   
//if the totalscore equals to target, user wins
//the computer alerts and resets game
       if(totalScore === targetNumber){
            alert("You won!");
            $("#total-score").text(totalScore);
            win++;
            $("#win").text(win);
            reset();
            
       }

//if the totalscore is biggr than target, user 
//the computer alerts and resets game

      else if(totalScore > targetNumber){
           alert("You lost!");
           $("#total-score").text(totalScore);
           loss++;
           $("#loss").text(loss);
           reset();
  }

    if(targetNumber - totalscore <= 30){

      $("#targetNumber").toggleClass("warning");
    }

          
});

});
