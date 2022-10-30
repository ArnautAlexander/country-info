import React, { useEffect, useState } from 'react'
import CountriesListItem from './CountriesListItem'
import { Wrap, WrapItem } from '@chakra-ui/react'

function CountriesList() {
    const [cList, setCList] = useState(null)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(r => r.json())
        .then(d => {
            setCList(d)
        })
    }, [])

    return (
        <Wrap>
            <WrapItem>
                <CountriesListItem />
            </WrapItem>
            <WrapItem>
                <CountriesListItem />
            </WrapItem>
            <WrapItem>
                <CountriesListItem />
            </WrapItem>
            <WrapItem>
                <CountriesListItem />
            </WrapItem>
            <WrapItem>
                <CountriesListItem />
            </WrapItem>
        </Wrap>
    )
}

export default CountriesList