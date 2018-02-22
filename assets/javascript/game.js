<script type="text/javascript">
                        //-  pseudocode for hangman 

        // open page display: welcome to hangman, do you want to play? (confirm to the user)
        
                                //-- Arrays--\\

            var word = [ "mailbox", "america", "hockey", "orlando"];
            var randomWord = word[Math.floor(Math.random() *word.length)];
            var randomWordLength = randomWord.length;
            console.log(randomWord);
         
         
            var correctGuess = ["m","a","i","l","b","o","x"];
            var inCorrectGuess =["c","d","e","f","g","h","j","k","n","p","q","r","s","t","u","v","w","y","z"];

                        //--- creating a blank answer and assiging it the randomly chosen word--\\
            var answer= [];
            for (var i =0; i < randomWord.length; i++); {
                answer[i].push("_");
                
            }

            var correctLength = correctGuess.length;
            var incorrectLength = inCorrectGuess.length;
            var answerLength = answer.length;
            // var res = ( correctGuess[i]);



            var al= document.getElementById("wordToGuess");
            // var al= innerhtml = randomWord;
            console.log(al);

            console.log(correctGuess,inCorrectGuess,answer,correctLength)
        
            var win = "You Win!"
            var lose = "You Lose!"
            // var res = str.replace( correctGuess[i], answer[i])	
        
                                                    //-- Events-- \\
                            // --  key press to start game --\\
            document.onkeyup=function(event) 
            {
                var userGuess = event.key;
                console.log(userGuess)};

                for ( var j = 0 ; j< correctLength.length; j++){
   
                 if ( correctGuess[j]=== userGuess) {
   
                inCorrectGuess[j] = userGuess;} }  



    // {           for(var i=0; i < correctLength; correctGuess++ ) {
                    // console.log(correctGuess[i]);
                    
                    // if(userGuess = correctGuess[i]) {
                        



                    // else(userGuess = inCorrectGuess) }   
    

                    // document.getElenemntByID.innertext.html = res;

                
                    
    
                                // -- key press to guess -- \\
            // var userGuess= document.onkeyup=function(event)
                
                                 //-- Conditionals --\\
        


        //     If (userGuess = correctGuess)
        //         for( var i = 0; i < correctGuess.length; correctGuess)}
        //         console.log(userrrectGuess);
        //     }
        //         replace answer array with letter pressed): do this with a string replace function? if userGuess === correctGuess[i] run document.getElementByeId = res
        //                    else ( userGuess = inCorrectGuess[i]);
        //     }        
        //     If (userGuess = inCorrectGuesss, display more of hangman image (create an immage array with '\' in a hangman pic?)
        //                 (( if i need an 'else' to this 'if' it would be "else(must be a correctGuess)
                           
                           
        //     if((userGuess === correctGuess) || (userGuess === inCorrectGuess)) { 
        //         display 'guessed letter' on the screen'
        
        //                             //  -- looping  --
            
        //     1) for loop on the key press event (userGuess) -- checking the correct letter array for a character match(charAt function)
        //     2) for loop on 
        
        
        
        
        // Rules of the game: 
        //     start the game: 
        //         text: press any key to play (document.onkeyup.fucntion(event))
        //             on key press replace the opening text with the hangman image
        //             and images of blank dashes (create array of only dashes)
            
        //     blank dashes that contain letters to a word
        //     player guesses one letter at a time
        //         What happens when a player guesses? ( the console must check something - check the correctLetter array for matching letter
        //                             if not, "must be in the incorrectLetter array"-- then add to the letterGuessed array(display on screen)
        
        //     when a correct letter is guessed, that letter replaces the dash in the corresponding dash 
        //         ( .indexof, document.getElenemntByID.innertext.html, html text as variable, two seperate arrays)
        //     when an incorrect letter is guessed a new feature of the hangman shows up and a display of the incorrect letter shows across the bottom
        
        // End of Game:
        //     Game is over when either: 
        //         1) word is completely guessed correctly
        //             if word completely guessed change display to "You Win!"
                        
        //         2) the hangman image is complete
        //             If hangman image is complete, change display to "Boo You Lose!"
        
        //     While loop (playerRemainingGuesses > 0, the game continues (guess again)