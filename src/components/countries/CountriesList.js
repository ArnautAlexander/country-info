import React from 'react'
import CountriesListItem from './CountriesListItem'
import { 
    Grid, 
    GridItem, 
    Flex, 
    Skeleton
} from '@chakra-ui/react'

function CountriesList({ filtCountries }) {
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
                            <CountriesListItem 
                                area={item.area}
                                capital={item.capital}
                                coatOfArms={item.coatOfArms.svg}
                                flags={item.flags.svg}
                                languages={item.languages}
                                maps={item.maps}
                                name={item.name.official} 
                                population={item.population}
                                region={item.region} 
                                subregion={item.subregion} 
                                status={item.status}
                                timezones={item.timezones}
                            />
                        </GridItem>   
                    </Skeleton>
                ))}
            </Grid>
        </Flex>
    )    
}

export default CountriesList