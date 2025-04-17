# Addition Ideas:

## Puzzle Lock:
- this idea flows like a lock and key
	- Puzzle 1 Final Answer is the key to unlock puzzle 2

## Puzzle 2 Stage 1:
### Wordle Puzzle:
- Team-based play idea:
	- each player has a Wordle puzzle to solve, and all players have the same word to solve for
		- IF a player does not get the word, they are stopped in their tracks
			- They don't get the key for themselves
			- They have their cookie/session/local storage marked with an attribute that makes them unable to unlock puzzle 3
				- This is the final sign that they faild puzzle 2
	- Teammates must work together to "keep each other alive"
	- There is no ranking is needed in terms of timing and who gets the key first
		- This is not Ready Player One

## Puzzle 2 Stage 2:
### Complete the sentence:
- Using the scripture we have for Conquest's main theme we can allow the campers to fill in some blanks.
	- this data can be validated and stored using JSON (hopefully)
	- Hunting for a needle in the haystack:
		- Having multiple blanks gives campers the idea that there can be multiple words that are the key to solve this stage of the puzzle

# Technical Ideas:
- Storage of keys, attributes and unlocks should avoid using server-based validation as much as possible
	- HTMX
	- JQuery
	- AJAX
	- VanillaJS


- Storage Assets:
	- JSON is one of the best ideas i can think of to store things like puzzle keys and unlock validators

# Flow of Information (as per the ideas in my head):

## Puzzle Unlock Data Flow:
User solves puzzle 1 -> User uses the key in Puzzle 1 to unlock Puzzle 2 -> Website validates user input using JSON-stored values -> Unlock Puzzle OR invalidate user entry

## User Attribute Storage:
User Fails at Wordle Puzzle -> Attribute hash is stored in local storage of user device -> User is blocked from accessing other puzzles based on JS checking local storage before letting the player access the puzzle



