import React, { useEffect, useState } from 'react'
import CountriesListItem from './CountriesListItem'
import { Grid, GridItem, Flex } from '@chakra-ui/react'

function CountriesList() {
    const [cList, setCList] = useState(null)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(r => r.json())
        .then(d => {
            setCList(d)
        })
    }, [])

    if(!cList){
        return(
            <div>
                loading
            </div>
        )
    }else{
        return(
            <Flex justifyContent={'center'}>
                <Grid templateColumns={{ '2xl': 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }} gap={4} px={{'2xl': 12, md: 8, sm: 8}} maxW={'1440px'}>
                    { cList.map(item => (
                        <GridItem>
                            <CountriesListItem name={item.name.official} region={item.region} subregion={item.subregion} flags={item.flags.svg}/>
                        </GridItem>   
                    ))}
                </Grid>
            </Flex>
        )    
    }
}

export default CountriesList