import React from 'react'
import Nav from './components/navigation/Nav'
import CountriesList from './components/countries/CountriesList'
import { Box } from '@chakra-ui/react'

function App() {
    console.log('123')
  return (
    <Box>
        <Nav />
        <CountriesList />
    </Box>
  )
}

export default App