/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const getRandomColor = () => {
  const colorElements = '0123456789ABCDEF'.split('')

  let colorString = '#'

  for (let i = 0; i < 6; i++) {
    colorString += colorElements[Math.floor(Math.random() * colorElements.length)]
  }

  document.querySelector('.container').setAttribute('style', `color: ${colorString}`)
  document.querySelector('body').setAttribute('style', `background-color: ${colorString}`)
  document.querySelector('button').setAttribute('style', `background-color: ${colorString}`)
}

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.",
    source: "Dennis Wholey",
    citation: "https://www.azquotes.com/quote/540836",
    category: 'funny'
  },
  {
    quote: "Before you judge a man, walk a mile in his shoes. After that who cares?... He's a mile away and you've got his shoes",
    source: 'Billy Connolly',
    category: 'funny'
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin"
  },
  {
    quote: "If you think you are too small to make a difference, try sleeping with a mosquito",
    source:  "Dalai Lama",
    category: 'funny'
  },
  {
    quote: "May the Force be with you.",
    source: "Star Wars",
    year: '1977',
    category: 'film'
  },
  {
    quote: "There's no crying in baseball!",
    source: "A League of their Own",
    year: '1992',
    category: 'film'
  },
  {
    quote: "Nobody puts Baby in a corner.",
    source: "Dirty Dancing",
    year: '1987',
    category: 'film'
  },
]

const updateCountdown = () => {
  if (timer === 1) {
    printQuote()
    timer = 5
  } else {
    timer--
  }
  updateCountdownDisplay()
}

const resetCountdown = () => {
  timer = 5
  clearInterval(countdown)
  updateCountdownDisplay()
  countdown = setInterval(updateCountdown, 1000)
}

const updateCountdownDisplay = () => {
  document.querySelector('.time').innerHTML = `${timer} ${timer > 1 ? 'seconds' : 'second' }`
}

let timer = 5


/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  let newQuoteIndex = Math.floor(Math.random() * quotes.length)

  /* Get random number and return the quote at that index in the quotes array.
   * If the random number is the same as that of the currently displayed 
   * quote's index, generate a new number (prevents the same quote 
   * from being displayed again).
   */
  do {
    newQuoteIndex = Math.floor(Math.random() * quotes.length)
  } while (newQuoteIndex === currentQuoteIndex)

  currentQuoteIndex = newQuoteIndex
  return quotes[newQuoteIndex]
}



let countdown = setInterval(updateCountdown, 1000);

/***
 * `printQuote` function
***/
const printQuote = () => {
  resetCountdown()
  getRandomColor()

  let quote = getRandomQuote()
  
  document.querySelector('.quote').innerHTML = quote.quote
  document.querySelector('.source').innerHTML = `
    ${quote.source}${quote.year ? `<span class="year">${quote.year}</span>` : ''}
  `
}



let currentQuoteIndex = 0
getRandomColor()
printQuote()



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);