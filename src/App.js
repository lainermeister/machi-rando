import { useState, useEffect } from 'react'
import './App.css'

const base = [
    { place: 'wheat field', dice: 1, type: 'primary' },
    { place: 'ranch', dice: 2, type: 'primary' },
    { place: 'bakery', dice: 2, type: 'secondary' },
    { place: 'cafe', dice: 3, type: 'restaurant' },
    { place: 'convenience store', dice: 4, type: 'secondary' },
    { place: 'forest', dice: 5, type: 'primary' },
    { place: 'stadium', dice: 6, type: 'establishment' },
    { place: 'tv station', dice: 6, type: 'establishment' },
    { place: 'business center', dice: 6, type: 'establishment' },
    { place: 'cheese factory', dice: 7, type: 'secondary' },
    { place: 'furniture factory', dice: 8, type: 'secondary' },
    { place: 'mine', dice: 9, type: 'primary' },
    { place: 'family restaurant', dice: 9, type: 'restaurant' },
    { place: 'apple orchard', dice: 10, type: 'primary' },
    { place: 'farmers market', dice: 11, type: 'secondary' },
]
const harbor = [
    { place: 'flower garden', dice: 4, type: 'primary' },
    { place: 'mackerel boat', dice: 8, type: 'primary' },
    { place: 'tuna boat', dice: 13, type: 'primary' },
    { place: 'flower shop', dice: 6, type: 'secondary' },
    { place: 'food warehouse', dice: 12, type: 'secondary' },
    { place: 'hamburger stand', dice: 8, type: 'restaurant' },
    { place: 'pizza joint', dice: 7, type: 'restaurant' },
    { place: 'sushi bar', dice: 1, type: 'restaurant' },
    { place: 'publisher', dice: 7, type: 'establishment' },
    { place: 'tax office', dice: 8, type: 'establishment' },
]
const millionaireRow = [
    { place: 'corn field', dice: 3, type: 'primary' },
    { place: 'vineyard', dice: 7, type: 'primary' },
    { place: 'general store', dice: 2, type: 'secondary' },
    { place: 'moving company', dice: 9, type: 'secondary' },
    { place: 'loan office', dice: 5, type: 'secondary' },
    { place: 'winery', dice: 9, type: 'secondary' },
    { place: 'demolition company', dice: 4, type: 'secondary' },
    { place: 'soda bottling plant', dice: 11, type: 'secondary' },
    { place: 'french restaurant', dice: 5, type: 'restaurant' },
    { place: "member's only club", dice: 12, type: 'restaurant' },
    { place: 'park', dice: 11, type: 'establishment' },
    { place: 'renovation company', dice: 8, type: 'establishment' },
    { place: 'tech startup', dice: 10, type: 'establishment' },
    { place: 'international exhibit hall', dice: 10, type: 'establishment' },
]

function App() {
    const [expansion, setExpansion] = useState('N/A')
    const [allCards, setAllCards] = useState(base)

    useEffect(() => {
        if (expansion === 'HARBOR') {
            setAllCards([...base, ...harbor])
        } else if (expansion === 'MILLIONAIRE ROW') {
            setAllCards([...base, ...millionaireRow])
        } else {
            setAllCards(base)
        }
    }, [expansion])

    function handleChangeExpansion() {
        if (expansion === 'N/A') {
            setExpansion('HARBOR')
        } else if (expansion === 'HARBOR') {
            setExpansion('MILLIONAIRE ROW')
        } else {
            setExpansion('N/A')
        }
    }

    return (
        <div className="App">
            <h1>MACHI RANDO</h1>
            <h2>EXPANSION: {expansion}</h2>
            <button onClick={handleChangeExpansion}>
                Change Expansion Pack
            </button>
            <FlippedCards allCards={allCards} />
        </div>
    )
}

export default App


function useFlipCards(allCards ) {
  const [inPlay, setInPlay] = useState(new Set())
    const [newest, setNewest] = useState()
  function flipCard () {
    const rand = Math.floor(Math.random() * allCards.length)
    const card = allCards[rand]
    if (!inPlay.has(card)) return card
    return flipCard()
  }
  function reset() {
    const startingCards = new Set()
    while (startingCards.size < 10) {
        startingCards.add(flipCard())
    }
    setInPlay(startingCards)
  }

  function onNewCard() {
    const newest = flipCard()
    inPlay.add(newest)
    setInPlay(new Set(inPlay))
    setNewest(newest)
  }
  return {reset, onNewCard, inPlay, newest}
}
function FlippedCards(props) {
    const { allCards } = props
    
    const {reset, onNewCard, inPlay, newest} = useFlipCards(allCards)
    useEffect(()=>reset(), [allCards])
    return (
        <>
            {' '}<button onClick={onNewCard}>+ Add New Card</button>
            <h3>Flipped Cards</h3>
            {Array.from(inPlay)
                .sort((a, b) => a.dice - b.dice)
                .map((card) => (
                    <div
                        className={`App-row ${newest === card && 'newest'} ${
                            card.type
                        }`}
                        key={card.place}
                    >
                        <p>{card.place}</p> <p>{card.dice}</p>
                    </div>
                ))}
        </>
    )
}
