let header = document.querySelector('.header')
let right = document.querySelector('.queen-right')
let left = document.querySelector('.queen-left')
let question = document.querySelector('.question-middle')
let button = document.querySelector('.randomizer')



// API call for lipsync info
const getQueens = async () => {
  
  button.addEventListener('click', getQueens)
  
  try {
    
    const url = "http://www.nokeynoshade.party/api/lipsyncs"
    const response = await axios.get(url)
    console.log(response.data)

    let songs = response.data
    
    songs.map((song) => {
      question.innerHTML += `
      <p>${song.name} by ${song.artist}</p>
      `

      let queens = response.data[0].queens
      console.log(queens)
    })


  } catch (error) {
    console.log(`Here is your error ${error}`)
  }
}
getQueens()





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