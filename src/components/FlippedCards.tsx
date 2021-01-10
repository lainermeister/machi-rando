import React from 'react'
import { Card as MachiCard, CardColors } from './types'
import { Box, ListItem, BoxProps } from '@material-ui/core'
interface FlippedCardsProps {
    currentCards: MachiCard[]
    newestCard: MachiCard | null
}
export function FlippedCards(props: FlippedCardsProps) {
    const { currentCards, newestCard } = props
    console.log(newestCard)
    return (
        <Box maxHeight="60vh" overflow="scroll">
            {currentCards.map((card, index) => (
                <FlippedCard
                    card={card}
                    newest={newestCard?.place === card.place}
                />
            ))}
        </Box>
    )
}

interface FlippedCardProps {
    card: MachiCard
    newest: boolean
}

function FlippedCard(props: FlippedCardProps) {
    const { card, newest } = props
    const style: BoxProps = newest
        ? {
              borderColor: CardColors[card.type].color,
              color: CardColors[card.type].color,
              bgcolor: "#fffde7",
              fontWeight: '600',
              fontSize: "20px",
              boxShadow: 2
          }
        : {
              borderColor: CardColors[card.type].color,
              bgcolor: CardColors[card.type].color,
              color: 'white',
          }
    return (
        <ListItem
            className={`App-row ${newest && 'newest'} ${card.type}`}
            key={card.place}
            dense
        >
            <Box
                key={card.place}
                py={0.5}
                px={3}
                borderRadius={2}
                border={2}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                {...style}
            >
                <Box>{card.place}</Box>
                <Box>{card.dice ?? card.sort}</Box>
            </Box>
        </ListItem>
    )
}
