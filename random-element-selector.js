const quotes = [  "Life is 10% what happens to us and 90% how we react to it.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"It does not matter how slowly you go as long as you do not stop.",  "Don't watch the clock; do what it does. Keep going.",
"Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",  "Believe you can and you're halfway there.",
"We may encounter many defeats but we must not be defeated.",  "If you want to live a happy life, tie it to a goal, not to people or things."];


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.getElementById("quote-box").innerHTML = getRandomQuote();

