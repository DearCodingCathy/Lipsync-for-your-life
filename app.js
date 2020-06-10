
// Grab everything!!
let header = document.querySelector('.header')
let right = document.querySelector('.queen-right')
let left = document.querySelector('.queen-left')
let question = document.querySelector('.question-middle')
let startButton = document.querySelector('.start-btn')
let nextButton = document.querySelector('.next-btn')
const questionContainer = document.querySelector('.question-section')

// Global Variables 
let shuffledQuestions;
let currentQuestionIndex;
let counter = 0

//Add event listeners 
startButton.addEventListener('click', startGame)





// API CALL for lipsync info
const getQueens = async () => {
  
  
  try {
    
    const url = "http://www.nokeynoshade.party/api/lipsyncs"
    const response = await axios.get(url)
    // console.log(response.data)

    let songs = response.data
    
    let song = songs[0]
      question.innerHTML += `
      <p>${song.name} by ${song.artist}</p>
      `
      let queens = song.queens
      // console.log(queens)
      let queen1 = song.queens[0]
      let queen2 = song.queens[1]
      right.innerHTML += `
      <p>${queen1.name}</p>
      <p>${queen1.won}</p>`

      left.innerHTML += `
      <p>${queen2.name}</p>
      ${queen2.won}`

      // questionArr.push(`${song.name} by ${song.artist}`)
      // // console.log(questionArr)
      // queensArr.push(queens)
      // console.log(queensArr)
  } catch (error) {
    console.log(`Here is your error ${error}`)
  }
}
getQueens()

// FUNCTION FOR NEXT QUESTION
async function nextQuestion(counter) {
  const url = "http://www.nokeynoshade.party/api/lipsyncs"
    const response = await axios.get(url)

    let songs = response.data
  let song = songs[counter]
  console.log(song)
  question.innerHTML = `
      <p>${song.name} by ${song.artist}</p>
      `
      let queens = song.queens
      // console.log(queens)
      let queen1 = song.queens[0]
      let queen2 = song.queens[1]
      right.innerHTML = `
      <p>${queen1.name}</p>
      <p>${queen1.won}</p>`

      left.innerHTML = `
      <p>${queen2.name}</p>
      ${queen2.won}`
  
}

// EVENT LISTENER FOR NEXT BUTTON
nextButton.addEventListener('click', () => {
  counter += 1
  nextQuestion(counter)
})


function startGame() {
  // console.log('Started!')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
  }
  
  
  // function showQuestion(question) {
  //   question.innerText = question.question
  //   question.answers.forEach(answer => {
  //     const button = document.createElement('button')
  //     button.innerText = answer.text
  //     button.classList.add('btn')
  //     if (answer.correct) {
  //       button.dataset.correct = answer.correct
  //     }
  //     button.addEventListener('click', selectAnswer)
  //     answerButtonElement.appendChild(button)
  
  //   })
  // }
  
  // function reset() {
  //   clearStatusClass(document.body)
  //   while (answerButtonsElement, firstChild) {
  //     answerButtonsElement.removeChild
  //     (answerButtonsElement.firstChild)
  //   }
  // }
  
  // function selectAnswer(e) {
  //   const selectedButton = e.target
  //   const correct = selectedButton.dataset.correct
  //   setStatusClass(document.body, correct)
  //   Array.from(answerButtonElement.children).forEach(button => {
  //     setStatusClass(button, button.dataset.correct)
  //   })
    // if (song.length > 20) {
    //   nextButton.classList.remove('hide')
    // } esle {
    //   startButton.innerText = 'Replay'
    //   startButton.classList.remove('hide')
    // }
  
  // }
  
  // function setStatusClass(element, correct) {
  //   clearStatusClass(element)
  //   if (correct) {
  //     element.classList.add('correct')
  //   } else {
  //     element.classList.add('wrong')
  //   }
  // }
  
  // function clearStatusClass(element) {
  //   element.classList.remove('correct')
  //   element.classList.remover('wrong')
  // }




































// button.addEventListener('click', getQueens)

// function getRandomqueens() {
  
//   let songs = response.data

//     songs.map((song) => {
//     question.innerHTML += `
//     <p>${song.name} by ${song.artist}</p>
//     `
//     let queens = song.queens
//     // console.log(queens)
//     let queen1 = song.queens[0]
//     let queen2 = song.queens[1]
//     right.innerHTML += `
//     <p>${queen1.name}</p>`

//     left.innerHTML += `
//     <p>${queen2.name}</p>`

//   })

// }
// getRandomqueens()

// const allSyncs =



// API call for queens imgs
// const getQueensimg = async () => {

//   try {
//     const url2 = "http://www.nokeynoshade.party/api/seasons"
//     const res = await axios.get(url2)
//     console.log(res.data)


//   } catch (error) {
//     console.log(`This is your error ${error}`)
//   }
// }
// getQueensimg()