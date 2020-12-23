import {useState, useEffect} from 'react'
import './App.css';

const base = [
  {place: "wheat field", dice: 1}, 
  {place: "bakery",  dice: 2.5}, 
  {place: "convenience store", dice: 4},
  {place: "forest", dice: 5}, 
  {place: "stadium", dice: 6}, 
  {place: "cheese factory", dice: 7}, 
  {place: "furniture factory", dice: 8}, 
  {place: "family restaurant", dice: 9.5}, 
  {place: "apple orchard", dice: 10}, 
  {place: "farmers market", dice: 11.5}
]
const harbor = [
  {place: "flower garden", dice: 4},
   {place: "mackerel boat", dice: 8},
   {place:  "tuna boat", dice: 13}, 
   {place: "flower shop", dice: 6}, 
   {place: "food warehouse", dice: 12.5}, 
   {place: "hamburger stand", dice: 8}, 
   {place: "pizza joint", dice: 7}, 
   {place: "sushi bar", dice: 1}, 
   {place: "publisher", dice: 7}, 
   {place: "tax office", dice: 8.5}
]

function App() {
  const allCards = [...base, ...harbor]
  const [inPlay, setInPlay] = useState(new Set())
  const [newest, setNewest] = useState()

  function getStarting() {
    const startingCards = new Set()
    while(startingCards.size < 10) {
      startingCards.add(flipCard())
    }

    return startingCards
  }

  useEffect(()=>setInPlay(getStarting()), [])

  function flipCard() {
    const rand = Math.floor(Math.random() * allCards.length)
    const card = allCards[rand]
    if(!inPlay.has(card))
      return card;
    return flipCard()
  }

  function handleNewCard() {
    const newest = flipCard()
    inPlay.add(newest)
    setInPlay(new Set(inPlay))
    setNewest(newest)
  }
  return (
    <div className="App">
        <button onClick={handleNewCard}>Add New Card</button>
        <h1>Flipped Cards</h1>
        {Array.from(inPlay).sort((a,b)=>a.dice-b.dice).map((card)=><div className={`App-row ${newest === card && "newest"}`}><p>{card.place}</p> <p>{card.dice}</p></div>)}
    </div>
  );
}

export default App;
