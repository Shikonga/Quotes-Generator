// button click generates a quote- onclick function
// name of the person quoting and the quote div should have id
// array


const quotes = [

    ' "The only way to do great work is to love what you do." - Steve Jobs ',
    '"Innovation distinguishes between a leader and a follower." - Steve Jobs ',
    '"Dont be afraid to give up the good to go for the great." - John D. Rockefeller',
    '"Success is not final, failure is not fatal:it is the courage to continue that counts." - Winston Churchill',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt'
];

function newQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);// length of quote. // floor- round the quotes
    quoteElement.textContent =quotes[randomIndex];
    
}