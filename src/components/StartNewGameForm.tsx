import React, { useState } from 'react'
import { Expansions, StartNewGameFormData } from './types'
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Input,
} from '@material-ui/core'


interface StartNewGameFormProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: StartNewGameFormData) => void;
    initialFormData: StartNewGameFormData
}

export function StartNewGameForm(props: StartNewGameFormProps) {
    const { isOpen, onClose, initialFormData, onSubmit } = props

    const [data, setData] = useState<StartNewGameFormData>(initialFormData)

    function handleChangeExpansion(event: React.ChangeEvent<HTMLInputElement>) {
        setData({...data, [event.target.name as Expansions]: event.target.checked})
    }

    function handleChangeNumCards(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setData({...data, [event.target.name]: Number(event.target.value)})
    }

    function handleSubmit() {
        onSubmit(data)
    }
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">Start a New Game</DialogTitle>
            <DialogContent>
                <FormControl component="fieldset">
                    <Box>
                        <Box>
                            <FormLabel component="legend">Expansions</FormLabel>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        checked={data[Expansions.Harbor]}
                                        onChange={handleChangeExpansion}
                                        name={Expansions.Harbor}
                                    />
                                }
                                label="Harbor"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        checked={data[Expansions.MillionaireRow]}
                                        onChange={handleChangeExpansion}
                                        name={Expansions.MillionaireRow}
                                    />
                                }
                                label="Millionaire Row"
                            />
                        </Box>
                        <Box mt={2}>
                            <FormLabel component="legend">
                                Number of Cards
                            </FormLabel>
                            <Input
                                color="primary"
                                onChange={handleChangeNumCards}
                                type="number"
                                name="numCards"
                                value={data.numCards}
                            />
                        </Box>
                    </Box>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" autoFocus>
                    Start
                </Button>
            </DialogActions>
        </Dialog>
    )
}
