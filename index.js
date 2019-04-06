
 
const functions = require('firebase-functions');
const {dialogflow}=require('actions-on-google');

const WELCOME_INTENT ='Default Welcome Intent';
const FALL_BACK_INTENT='Default Fallback Intent';
const BOOKS_SUMMARY = 'Books_Summary';
const BOOK_ENTITES = 'book_entites';

const app = dialogflow();

app.intent(WELCOME_INTENT, (conv) => {
  conv.ask("Welcome to the Saransh. How can I help you?");
});
app.intent(FALL_BACK_INTENT, (conv) => {
  conv.ask("Sorry to service you");
});

app.intent(BOOKS_SUMMARY, (conv) => {
  const book_type = conv.parameters[BOOK_ENTITES].toLowerCase();
  if(book_type ==="list")
  {
   conv.ask("HARRY POTTER, JUNGLE QUEEN, ONE SIDE LOVE");
  }
  else if(book_type ==="summary")
  {
    conv.ask("Harry Potter and the Chamber of Secrets begins when Harry is spending a miserable summer with his only remaining family, the Dursleys. During a dinner party hosted by his uncle and aunt, Harry is visited by Dobby, a house-elf. Dobby warns Harry not to return to Hogwarts, the magical school for wizards that Harry attended the previous year. Harry politely disregards the warning, and Dobby wreaks havoc in the kitchen, infuriating the Dursleys.");
  }
 
});
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

           
