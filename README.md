# Hangman-CLI
_This project is to demonstrate a logic based game using cli_
**Node Packages used**
- inquirer
- fs

Using fs I read a json file with a 1000 words and randomize a word for my hangman game.
Using inquirer I take user input.  Check to see if it is a letter, using regex.
If not I alert them to enter a letter.
If so I run my logic to add the chosen letter to the guesses.
Each game the user gets 10 guesses.
If they fail the guess or guess a previously guessed letter their remaining guesses is subtracted by one.
Each move they can see the word's letters with revealed letters (based on their choices) and underscores
signifying a letter yet to be guessed.

If they use up all their remaining guesses they get a loss and it is recorded.
If they guess all the letters in the word they get a win and it is recorded.