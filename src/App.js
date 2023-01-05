import React from 'react'
import Nav from './components/navigation/Nav'
import CountriesList from './components/countries/CountriesList'
import { Box } from '@chakra-ui/react'
import Search from './components/search/Search'

function App() {
  return (
    <Box>
        <Nav />
        <Search />
        <CountriesList />
    </Box>
  )
}

export default App