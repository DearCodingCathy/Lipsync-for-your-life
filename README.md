# Project Overview

## Lip Sync For Your Life!
https://dearcodingcathy.github.io/Lipsync-for-your-life/

## Project Description

A one player Rupauls drag race trivia game, that test the users knowledge of lip sync battles over the seasons. This game will present 20 lip sync battles that actually took place on the show, and allow the user to choose who the winner was based on their knowledge. Get it right, and get one point. Get it wrong and get 0 points. 

## API and Data Sample

https://drag-race-api.readme.io/docs/get-all-lipsyncs
https://drag-race-api.readme.io/docs/get-one-queen

```json

    {
        "id": 1,
        "name": "Supermodel",
        "artist": "RuPaul",
        "episodeId": 8,
        "queens": [
            {
                "id": 1,
                "name": "Victoria 'Porkchop' Parker",
                "won": false
            },
            {
                "id": 3,
                "name": "Akashia",
                "won": true
            }
        ]
    },
    {
        "id": 2,
        "name": "We Break the Dawn",
        "artist": "Michelle Williams",
        "episodeId": 9,
        "queens": [
            {
                "id": 2,
                "name": "Tammie Brown",
                "won": false
            },
            {
                "id": 3,
                "name": "Akashia",
                "won": true
            }
        ]
```

## Wireframes

https://wireframe.cc/pro/pp/ef62ce6d7349633

### MVP/PostMVP

#### MVP 

- Use API
- Display competing queens names
- Display Lip sync song sang
- Display winner
- Render data on page 
- Add second API to render picture
- Start Game page
- End of game page
- Display to user if the answer is right or wrong
- Allow user to choose winner
- Add replay game functionality

#### PostMVP  
- Record User response and keep score 
- Use local storage to save user answers and score?
- Multi-player functionality
- Add different drag race categories

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt | Complete
|June 9| Wireframes / Priority Matrix / Timeframes | Complete
|June 9| Start of Core Application Structure (HTML, CSS, etc.) | Complete
|June 9| Initial HTML & rendering data | Complete
|June 10| Core Application Structure (HTML, CSS, etc.) | Complete
|June 11| Initial Clickable Model  | Complete
|June 12| MVP | Complete
|June 15| Present | Incomplete

## Priority Matrix

[Imgur](https://i.imgur.com/Kkp3boe.jpg?1)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Base | H | 4hrs| 3hrs | 3hrs |
| Working with API | H | 4hrs| 4hrs | 4hrs |
| Working with 2nd API | H | 4hrs| 1.5hrs | 1.5hrs |
| Adding All JS info and eventlisteners | H | 4hrs| 4hrs | 4hrs |
| Display User Answers - right or wrong | H | 4hrs| 3hrs | 3hrs |
| Advanced CSS  | H | 4hrs| 3hrs | 3hrs |
| Display End of game result & replay option | H | 4hrs| 1hrs | 1hrs |
| CSS Updates| H | 4hrs| 3.5hrs | 3.5hrs |
| Make if Fancy!! | H | 8hrs| 3hrs | 3hrs |
| Total | H | 40hrs| 26hrs | 26hrs |

## Code Snippet
This is my start game function. I am proud of this function because I was able to figure out how to show my start and end page info, without have to create an end HTML page.

```
function startGame() {
  // console.log('Started!')
    startButton.classList.add('hide')
  questionContainer.classList.remove('hide')
  nextQuestion(0)
  nextButton.classList.remove('hide')
}
```

## Change Log
 N/A
