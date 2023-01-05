# JavaScript Quiz Game

[Click here to view final version of webpage](https://kcschaefs.github.io/password-generator/)

![Screenshot of the final page](./final-screenshot.png)


## User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Tasks
- create layout in HTML and CSS
- add button and function to start quiz
- Build Quiz: create quiz questions as objects within an array, serve questions and answers from array, set answer option selector (radio buttons), create feedback response (right or wrong)
- add button and function to serve next question
- Create Timer: set a timer to run down by seconds, take penalty time off for wrong answers
- End Quiz: end the quiz when all questions answered or timer runs out
- Add Name Entry: show user their final score, allow user to enter name
- Build Leaderboard: enter name and score from name entry screen onto user board, sort by high score
- add restart quiz button and functionality
- store names and scores in local storage so it persists
- troubleshoot + code cleanup

## Learnings
- how to use CSS grid vs flexbox to more easily create the desired layout (for simple layouts)
- became much more comfortable with arrays and objects (and nesting arrays and objects)
- I prefer to have functions that do as little as possible, nestling too many functions can create unanticipated errors/bugs
- it's best to take time at the beginning of the project to create a workflow of tasks - this helps to map out the application as well as ensure I don't get sidetracked with unnecessary feature adds
- became much more comfortable with using Google + other resources to find solutions to the issues I was encountering. got much better at being able to use the presented code solutions and adapting it to my purpose.
- realized the importance of writing comments to myself as well as ensuring overall structure/organization of my code (really easy to get lost or forget what certain code was doing)
- became much more comfortable with JS, understanding the syntax, structure, and capabilities so much better, this allowed me to be able to parse what I was seeing in MDN and Stack Overflow
- collaborating with others when I'm stuck, having another person look at your code when you are stuck and providing suggestions can be really helpful to getting un-stuck

## Future Improvements
- allow for response feedback before going to the name entry screen if timer runs out due to wrong answer
- set the score to update after each question and display somewhere on the screen
- add a progress bar to show how much of the quiz has been completed
- add a trophy image next to the "view high score" to better indicate that it is a clickable link