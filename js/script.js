/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quotes = [
  {
    quote: 'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.',
    source: 'Dennis Wholey',
    category: 'funny'
  },
  {
    quote: "Before you judge a man, walk a mile in his shoes. After that who cares?... He's a mile away and you've got his shoes",
    source: 'Billy Connolly',
    category: 'funny'
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin D. Roosevelt'
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin'
  },
  {
    quote: 'If you think you are too small to make a difference, try sleeping with a mosquito',
    source:  'Dalai Lama',
    category: 'funny'
  },
  {
    quote: 'May the Force be with you.',
    source: 'Obi-Wan Kenobi',
    citation: 'Star Wars',
    year: '1977',
    category: 'film'
  },
  {
    quote: "There's no crying in baseball!",
    source: 'Jimmy Dugan',
    citation: 'A League of their Own',
    year: '1992',
    category: 'film'
  },
  {
    quote: 'Nobody puts Baby in a corner.',
    source: 'Johnny Castle',
    citation: 'Johnny Castle',
    year: '1987',
    category: 'film'
  },
]

const getRandomColor = () => {
  const colorElements = '0123456789ABCDEF'.split('')

  let colorString = '#'

  for (let i = 0; i < 6; i++) {
    colorString += colorElements[Math.floor(Math.random() * colorElements.length)]
  }

  // Set the style of the effected elements to the random color.
  document.querySelector('.container').setAttribute('style', `color: ${colorString}`)
  document.querySelector('body').setAttribute('style', `background-color: ${colorString}`)
  document.querySelector('button').setAttribute('style', `background-color: ${colorString}`)
  document.querySelector('#category-film').setAttribute('style', `background-color: ${colorString}`)
  document.querySelector('#category-funny').setAttribute('style', `background-color: ${colorString}`)
}

// Updates the 'New Quote Countdown'.
const updateCountdown = () => {
  if (timer === 1) {
    printQuote()
    timer = 5
  } else {
    timer--
  }
  updateCountdownDisplay()
}

// Resets the countdown
const resetCountdown = () => {
  timer = 5
  clearInterval(countdown) // Clears the countdown/interval.
  updateCountdownDisplay()
  countdown = setInterval(updateCountdown, 1000) // Starts a new countdown/interval.
}

// Sets the countdown display on the page.
const updateCountdownDisplay = () => {
  document.querySelector('.time').innerHTML = `${timer} ${timer > 1 ? 'seconds' : 'second' }`
}

const getFilmQuote = () => printQuote('film')

const getFunnyQuote = () => printQuote('funny')

/* 
 * Get random number and return the quote at that index in the quotes array.
 * If the random number is the same as that of the currently displayed 
 * quote's index, generate a new number (prevents the same quote 
 * from being displayed again).
 */
const getRandomQuote = category => {
  let newQuoteIndex
  let filteredQuotes
  console.log('category =', category)
  if (category) {
    filteredQuotes = quotes.filter(quote => {
      if (quote.category && quote.category === category) return quote
    })
  } else {
    filteredQuotes = quotes
  }

  do {
    newQuoteIndex = Math.floor(Math.random() * filteredQuotes.length)
  } while (newQuoteIndex === currentQuoteIndex)
  
  currentQuoteIndex = newQuoteIndex
  return filteredQuotes[newQuoteIndex]
}

/*
 * Print the quote to the page. Includes resetting new quote countdown 
 * and getting a new color for the page background. 
 */
const printQuote = (category = null) => {
  resetCountdown()
  getRandomColor()

  // By default, functions called from an event listener pass
  // the event as an argument. If the argument passed is
  // not a string (e.g. it's an event) make sure that 
  // null is passed to the getRandomQuote function.
  if (typeof category !== 'string') category = null

  const quote = getRandomQuote(category)
  
  document.querySelector('.quote').innerHTML = quote.quote
  // Build source string. If a quote has a year and/or citation attributes include them.
  document.querySelector('.source').innerHTML = `${quote.source}${quote.year ? `<span class="year">${quote.year}</span>` : ''}${quote.citation ? `<span class="citation">${quote.citation}</span>` : ''}`
  // Build a category string. If a quote does not have a category, set it to 'General'.
  document.querySelector('.category').innerHTML = `Category: ${quote.category ? quote.category[0].toUpperCase() + quote.category.slice(1) : 'General'}`
}

let timer = 5
let currentQuoteIndex = 0
let countdown = setInterval(updateCountdown, 1000);

getRandomColor()
printQuote()

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('category-funny').addEventListener("click", getFunnyQuote, false);
document.getElementById('category-film').addEventListener("click", getFilmQuote, false);