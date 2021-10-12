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
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source:  "Patrick McKenzie"
  }
]

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


/***
 * `printQuote` function
***/
const printQuote = () => {
  getRandomColor()
  let quote = getRandomQuote()
  const quoteElement = document.querySelector('.quote')
  const authorElement = document.querySelector('.source')
  
  quoteElement.innerHTML = quote.quote

  authorElement.innerHTML = quote.source
}

getRandomColor()
let currentQuoteIndex = 0
printQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);