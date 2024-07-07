
{{
var quotes=[
        {
            quote: `“Be yourself; everyone else is already taken.”`,
            auther:`― Oscar Wilde`,
        },
        {
            quote: `“A room without books is like a body without a soul.”`,
            auther:`― Marcus Tullius Cicero`,
        },
        {
            quote: `“So many books, so little time.”`,
            auther:`― Frank Zappa`,
        },
        {
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
            auther:`― Albert Einstein`,
        },
        {
            quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
            auther:`― Marilyn Monroe`,
        },
        {
            quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
            auther:`― Mahatma Gandhi`,
        },
        {
            quote: `“Always forgive your enemies; nothing annoys them so much.”`,
            auther:`― Oscar Wilde`,
        },
        {
            quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
            auther:`― Oscar Wilde`,
        }
    ]
    var previousRandom;
    
function generateUniqueRandom() {
    var currentRandom;
    do {
        currentRandom = Math.floor(Math.random() * quotes.length);
    } while (currentRandom === previousRandom);
    previousRandom = currentRandom;
    console.log(previousRandom);
    document.getElementById('quote').innerHTML =quotes[previousRandom].quote;
    document.getElementById('auther').innerHTML =quotes[previousRandom].auther;
    // return previousRandom;
}
}}
