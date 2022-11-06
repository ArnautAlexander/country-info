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

    if(!cList){
        return(
            <div>
                loading
            </div>
        )
    }else{
        return(
            <Wrap>
                { cList.map(item => (
                     <WrapItem>
                        <CountriesListItem name={item.name.official} region={item.region} subregion={item.subregion} flags={item.flags.svg}/>
                    </WrapItem>   
                ))}
            </Wrap>
        )    
    }
}

export default CountriesList