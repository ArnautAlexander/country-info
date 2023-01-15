import React, { useState, useEffect} from 'react'
import Nav from './components/navigation/Nav'
import { Box } from '@chakra-ui/react'
import Search from './components/search/Search'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(r => r.json())
      .then(d => {
        setData(d)
      })
  }, [])

  return (
    <Box>
        <Nav />
        <Search allCountries={data}/>
    </Box>
  )
}

export default App