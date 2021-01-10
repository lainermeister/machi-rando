import { useState, useEffect } from 'react'
import {
    Card,
    StartNewGameFormData,
    Expansions,
    STARTING_NUMBER_CARDS,
    base,
    harbor,
    millionaireRow,
} from './types'

export function useMachiRando() {
    const [shuffledCards, setShuffledCards] = useState<Card[]>([])
    const [cardsFlipped, setCardsFlipped] = useState(0)
    const [newestCard, setNewestCard] = useState<Card | null>(null)
    const [formData, setFormData] = useState<StartNewGameFormData>({
        [Expansions.Harbor]: true,
        [Expansions.MillionaireRow]: true,
        numCards: STARTING_NUMBER_CARDS,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => onReset(), [formData])

    function onReset() {
        let cards = base
        if (formData[Expansions.Harbor]) {
            cards = [...cards, ...harbor]
        }
        if (formData[Expansions.MillionaireRow]) {
            cards = [...cards, ...millionaireRow]
        }
        const shuffledCards: Card[] = []
        const addedCards = new Set()
        while (shuffledCards.length < cards.length) {
            const rand = Math.floor(Math.random() * cards.length)
            const card = cards[rand]
            if (!addedCards.has(card)) {
                shuffledCards.push(card)
                addedCards.add(card)
            }
        }
        setShuffledCards(shuffledCards)
        setCardsFlipped(formData.numCards)
    }

    function onAddCard() {
        const newCardsFlipped = cardsFlipped + 1
        setCardsFlipped(newCardsFlipped)
        setNewestCard(shuffledCards[newCardsFlipped-1])
    }

    return {
        onReset: setFormData,
        currentCards: shuffledCards
            .slice(0, cardsFlipped)
            .sort((a, b) => a.sort - b.sort),
        cardsFlipped,
        formData,
        onAddCard,
        newestCard
    }
}
