let header = document.querySelector('.header')
let right = document.querySelector('#queen-right')
let left = document.querySelector('#queen-left')
let question = document.querySelector('#question')

const getQueens = async () => {
  
  try {
    
    const url = "http://www.nokeynoshade.party/api/lipsyncs"
    const response = await axios.get(url)
    console.log(response)

  } catch (error) {
    console.log(`Here is your error ${error}`)
  }
}
getQueens ()