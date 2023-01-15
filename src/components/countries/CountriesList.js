import React from 'react'
import CountriesListItem from './CountriesListItem'
import { Grid, GridItem, Flex, Skeleton } from '@chakra-ui/react'

function CountriesList({ filtCountries }) {

    console.log('я лист и я рендернулся')
    console.log(filtCountries)
    return(
        <Flex justifyContent={'center'}>
            <Grid templateColumns={{ 
                '2xl': 'repeat(3, 1fr)', 
                xl: 'repeat(3, 1fr)', 
                md: 'repeat(2, 1fr)' }} 
                gap={4} px={{'2xl': 12, md: 8, base: 4}} maxW={'1440px'}>
                { filtCountries.map(item => (
                    <Skeleton isLoaded={!filtCountries ? false : true} key={item.name.official}>
                        <GridItem>
                            <CountriesListItem name={item.name.official} region={item.region} subregion={item.subregion} flags={item.flags.svg}/>
                        </GridItem>   
                    </Skeleton>
                ))}
            </Grid>
        </Flex>
    )    
}

export default CountriesList
