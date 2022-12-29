# Random Password Generator

[Click here to view final version of webpage](https://kcschaefs.github.io/password-generator/)

![Screenshot of the final page](./final-screenshot.png)


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Tasks
- generate arrays for special characters, uppercase, lowercase, and numbers
- generate ask functions to allow for user selection of character number and character types
- generate functions that concatenate the corresponding array into a "selection" array for the password generator to pull from
- create a function that will randomly select a character from the chosen selection array
- display generated password
- add alert when user does not select number of characters within parameters (8-128)
- add alert when user doesn't select any characters

## Learnings
- I need to focus more on the smallest possible steps to write the code, I get too focused on the larger functionality rather than the next logical step
- how to use alerts
- how to change the text displayed on the webpage based on the JavaScript code + user inputs
- became much more familiar and comfortable with JavaScript, expecially functions, variables, and prompts/alerts
- Google is my friend

## Future Improvements
- cleaning up the code to be more efficient + follow best practice
- add a copy button so the user can eadily copy their password
- utilize check boxes or radio buttons for user to select the components of the password rather than prompts



## Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score