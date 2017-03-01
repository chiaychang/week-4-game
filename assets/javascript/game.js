
  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [10, 5, 3, 7];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });




	
	<div id="crystals"></div>

	<div id ="totalScore">
		<h2 id = "yts">Your Total Score is: <span id ="yourScore">0</span></h2>
		
	</div>

</div>
<script type="text/javascript">


  crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

  var counter = 0;
  var wins = 0;
  var losses = 0;
  $('#win').text(wins);
  $('#loss').text(losses);
  
  newCrystals();
  newGame();

  function newCrystals () {
    var numbers = []
      while(numbers.length < 4){
        var randomnumber = Math.ceil(Math.random()*12)
        var found = false;
        for (var i=0; i< numbers.length; i++){
        if (numbers[i] == randomnumber){
          found = true; break
        }
        }
        if(!found)numbers[numbers.length]=randomnumber;
      }
    console.log(numbers);   

    for (i = 0; i < numbers.length; i++) {
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', crystals[i]);
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage')
      $('#crystals').append(imageCrystal);
    }
  }

  function newGame() {

    counter = 0;
    $('#yourScore').text(counter);

    function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
      }

    var numberToGuess = randomIntFromInterval(19,120);

    $('.value').text(numberToGuess);


    $('.crystalImage').on('click', function(){
        counter = counter + parseInt($(this).data('num'));
       
        $('#yourScore').text(counter);

        if (counter == numberToGuess){
          $('#status').text('You won!!!!');
          wins ++;
          $('#win').text(wins);
          console.log(wins)
          $('#crystals').empty();
          newCrystals();
          newGame();
            
        } else if ( counter > numberToGuess){
            $('#status').text('You lost!')
            losses ++;
            $('#loss').text(losses);
            console.log(losses)
            $('#crystals').empty();
            newCrystals();
            newGame();
        }
    });
  }

});