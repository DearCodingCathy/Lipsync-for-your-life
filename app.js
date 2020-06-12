
// Grab everything!!
let header = document.querySelector('.header')
let right = document.querySelector('.queen-right')
let left = document.querySelector('.queen-left')
let question = document.querySelector('.question-middle')
let startButton = document.querySelector('.start-btn')
let nextButton = document.querySelector('.next-btn')
const questionContainer = document.querySelector('.question-section')
let answerButtonsElement = document.getElementsByClassName('.answer-btn')
let element = document.querySelector('body')
// console.log(answerButtonsElement)

// Global Variables 
let shuffledQuestions;
let currentQuestionIndex;
let counter = 0
// let availableSongs = []
let queensResult;

//Add event listeners 
startButton.addEventListener('click', startGame)

//TO TRY AND REMOVE NEXT FROM START
nextButton.classList.add('hide')

// API CALL for lipsync info
const getQueens = async () => {
  
  try {
    
    const url = "http://www.nokeynoshade.party/api/lipsyncs"
    const response = await axios.get(url)
    console.log(response.data)
    queensResult = response.data
    return response.data
    
  } catch (error) {
    console.log(`Here is your error ${error}`)
  }
}
getQueens()

// FUNCTION FOR NEXT QUESTION & API CALL FOR IMAGES
async function nextQuestion(counter) {
  
    let songs = queensResult
  let song = songs[counter]
  console.log(song)

  const imgcall1 = `http://www.nokeynoshade.party/api/queens/${song.queens[0].id}`
  const res1 = await axios.get(imgcall1)

  const imgcall2 = `http://www.nokeynoshade.party/api/queens/${song.queens[1].id}`
  const res2 = await axios.get(imgcall2)

  // console.log(res1, res2)
  
  question.innerHTML = `
      <p class= 'queen-info2'>${song.name} by ${song.artist}</p>
      `
      let queens = song.queens
      // console.log(queens)
      let queen1 = song.queens[0]
      let queen2 = song.queens[1]
      
  let queen1img = res1.data.image_url
  let queen2img = res2.data.image_url
  
  right.innerHTML = ` 
      <p class= 'queen-info'>${queen1.name}</p>
      <img class= queen-img src=${queen1img}>
      `

  left.innerHTML = `
      <p class= 'queen-info'>${queen2.name}</p>
      <img class= queen-img src=${queen2img}>
      `
}


// TRYING TO FIGURE OUT THE RIGHT PLACE TO PUT EVENT LISTENERS
  left.addEventListener('click', () => {
    element.classList.add('correct')
  })
  right.addEventListener('click', () => {
    element.classList.add('wrong')
  })

    



// EVENT LISTENER FOR NEXT BUTTON
nextButton.addEventListener('click', () => {
  if (counter < 19) {
    counter += 1
  } else {
    startButton.innerText = 'Replay'
    startButton.classList.remove('hide')
    questionContainer.classList.add('hide')
  }
  // Catherine add box remover later
  element.classList.remove('wrong')
  element.classList.remove('correct')
  nextQuestion(counter)
})

// Fuction to start game. hide start button, show next button, show first question
function startGame() {
  // console.log('Started!')
    startButton.classList.add('hide')
  questionContainer.classList.remove('hide')
  nextQuestion(0)
  nextButton.classList.remove('hide')
}