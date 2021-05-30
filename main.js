var quotes = ["Love For All, Hatred For None. – Khalifatul Masih III",
                    "Change the world by being yourself. – Amy Poehler",
                    "Every moment is a fresh beginning. – T.S Eliot",
                    "Never regret anything that made you smile. – Mark Twain",
                    "Die with memories, not dreams. – Unknown",
                    "Aspire to inspire before we expire. – Unknown",
                    "Everything you can imagine is real. – Pablo Picasso",
                    "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
                    "Whatever you do, do it well. – Walt Disney",
                    "What we think, we become. – Buddha"];

var greetings = ["Have a good day.", "Stay well.", "Be well.", "Make today your masterpiece."];

var reminders = ["Remember to complete your notes.", 
                "Remember to drink water.", 
                "Take a breath.", 
                "Be sure to stretch throughout the day.", 
                "Remember to take care of you."];

function messagePicker(array){
    return array[Math.floor(Math.random()  * array.length)];
}

class InspoCreator {
    constructor(inQuote, inGreeting, inReminder) {
        this.quote = inQuote;
        this.greeting = inGreeting;
        this.reminder = inReminder;
    }
}

function formatInspo(object) {
    console.log(
        `
        ${object.quote}
        -----
        ${object.greeting}
        -----
        ${object.reminder}`
    );
}


var quote1 = messagePicker(quotes);
var greeting1 = messagePicker(greetings);
var reminder1 = messagePicker(reminders);

finalGreeting = new InspoCreator(quote1,greeting1,reminder1);

formatInspo(finalGreeting);

