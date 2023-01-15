import React, { useState, useEffect } from 'react'
import { Flex, Input, Select, Stack, Box } from '@chakra-ui/react'
import CountriesList from '../countries/CountriesList'

function Search({ allCountries }) {
    const [search, setSearch] = useState('')
    const [filtCountries, setFiltCountries] = useState([])

    useEffect(() => {
        setFiltCountries(allCountries)
    }, [allCountries])

    const handleSearch = event => {
        setSearch(event.target.value)
        setFiltCountries(
            allCountries.filter(
                country => (
                    country
                    .name
                    .common
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()) ||
                    country
                    .name
                    .official
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
                )
            )
        ) 
    }

    const handleSort = event => {
        console.log(event.target.value)
        switch(event.target.value){
            case '': 
                console.log('я пустой')
                break
            case 'alph': 
                console.log(allCountries.sort((a, b) => a.name.official.toLowerCase().localeCompare(b.name.official.toLowerCase())))
                setFiltCountries(
                    allCountries.sort((a, b) => a.name.official.toLowerCase().localeCompare(b.name.official.toLowerCase()))
                )
                break
            case 'alphRev': 
                setFiltCountries(
                    allCountries.sort((a, b) => b.name.official.toLowerCase().localeCompare(a.name.official.toLowerCase()))
                )
                break
            default:
                break
        } 
    }

    return (
        <Box>
            <Flex justifyContent={'center'} py={4}>
                <Stack w={'100%'} direction={{'2xl': 'row', xl: 'row', lg: 'row', md: 'column', base: 'column'}} px={{'2xl': 12, md: 8, base: 4}} maxW={'1440px'} gap={2}>
                    <Input
                        value={search}
                        onChange={handleSearch}
                        placeholder='Какая страна вас интересует'
                        size='lg'
                        flexGrow={1}
                    />
                    <Select 
                        placeholder='По релевантности' 
                        defaultValue='def'
                        size='lg' 
                        maxW={{'2xl': '64', xl: '64', lg: '64', md: '100%', base: '100%'}}
                        onChange={handleSort}
                    >
                        <option value='alph'>По алфавиту ↓</option>
                        <option value='alphRev'>По алфавиту ↑</option>
                    </Select>
                </Stack>
            </Flex>
            <CountriesList filtCountries={filtCountries}/>
        </Box>
    )
}

export default Search
