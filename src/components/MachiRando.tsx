import React, { useState } from 'react'
import {
    Box,
    Button,
    Container,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined'
import { Card as MachiCard, StartNewGameFormData } from './types'
import { StartNewGameForm } from './StartNewGameForm'
import { FlippedCards } from './FlippedCards'

interface MachiRandoProps {
    currentCards: MachiCard[]
    cardsFlipped: number
    onReset: (data: StartNewGameFormData) => void
    onAddCard: () => void
    formData: StartNewGameFormData
    newestCard: MachiCard | null
}
export function MachiRando(props: MachiRandoProps) {
    const {
        currentCards,
        cardsFlipped,
        onReset,
        onAddCard,
        formData,
        newestCard,
    } = props

    const [modalOpen, setModalOpen] = useState(false)

    function handleToggleModal(open: boolean) {
        return () => setModalOpen(open)
    }
    function handleNewGame(data: StartNewGameFormData) {
        setModalOpen(false)
        onReset(data)
    }
    return (
        <Box
            p={2}
            display="flex"
            alignItems="center"
            bgcolor="grey.100"
            height="100vh"
            
        >
            <Container maxWidth="sm">
                    <Card raised>
                        <CardContent>
                            <Typography variant="h4">MACHI RANDO</Typography>
                            <StartNewGameForm
                                isOpen={modalOpen}
                                onClose={handleToggleModal(false)}
                                initialFormData={formData}
                                onSubmit={handleNewGame}
                            />
                            <h3>{cardsFlipped} Flipped Cards</h3>
                            <FlippedCards
                                currentCards={currentCards}
                                newestCard={newestCard}
                            />
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Button
                                    onClick={handleToggleModal(true)}
                                    color="default"
                                    startIcon={<RotateLeftOutlinedIcon />}
                                >
                                    New Game
                                </Button>
                                <Button
                                    onClick={onAddCard}
                                    variant="contained"
                                    color="default"
                                    startIcon={<AddCircleOutlineIcon />}
                                >
                                    NEXT
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
            </Container>
        </Box>
    )
}
