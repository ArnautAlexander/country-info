import React from 'react'
import Nav from './components/navigation/Nav'
import CountriesList from './components/countries/CountriesList'

function App() {
    console.log('123')
  return (
    <div>
        <Nav />
        <CountriesList />
    </div>
  )
}

export default App