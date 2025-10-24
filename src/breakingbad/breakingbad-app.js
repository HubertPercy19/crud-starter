/**

 * @returns {Object} quote information

 */

const fetchQuote = async () => {

  const random = Math.floor( Math.random() * 100 ) + 1; //* Generar un número random para recibir un personaje aleatorio

  const res = await fetch( "https://rickandmortyapi.com/api/character/" + random );

  const data = await res.json();

  console.log(data);
  
  return data;

};



/**

 *

 * @param {HTMLDivElement} element

 */

export const BreakingbadApp = async ( element ) => {

  document.querySelector( "#app-title" ).innerHTML = "Breakingbad App";

  element.innerHTML = "Loading...";

  const quoteLabel = document.createElement( "blockquote" );

  const authoLabel = document.createElement( "h3" );

  const nextQuoteButton = document.createElement( "button" );

  nextQuoteButton.innerHTML = `Next Quote`;

  const renderQuote = ( quote ) => {

    quoteLabel.innerHTML = quote.name;

    authoLabel.innerHTML = quote.species;

    element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton );

  };

  nextQuoteButton.addEventListener( 'click', async () => {

    element.innerHTML = 'Loading...';

    const quote = await fetchQuote();

    renderQuote( quote );
    
  } );

  const quote = fetchQuote().then( renderQuote );

};