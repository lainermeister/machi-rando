import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { useMachiRando } from './components/useMachiRando'
import { MachiRando } from './components/MachiRando'

import './App.css'

function App() {
    const data = useMachiRando()

    if (!data.currentCards) return <CircularProgress />

    return <MachiRando {...data} />
}

export default App
