import React, { useState, useEffect } from 'react'
import { Flex, Input, Stack, Box } from '@chakra-ui/react'
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
                </Stack>
            </Flex>
            <CountriesList filtCountries={filtCountries}/>
        </Box>
    )
}

export default Search