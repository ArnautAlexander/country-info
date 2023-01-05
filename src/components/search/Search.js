import React from 'react'
import { Flex, Input, Select, Stack } from '@chakra-ui/react'

function Search() {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)

  return (
    <Flex justifyContent={'center'} py={4}>
        <Stack w={'100%'} direction={{'2xl': 'row', xl: 'row', lg: 'row', md: 'column', sm: 'column'}} px={{'2xl': 12, md: 8, sm: 8}} maxW={'1440px'}>
            <Input
                value={value}
                onChange={handleChange}
                placeholder='Какая страна вас интересует'
                size='lg'
                flexGrow={1}
            />
            <Select placeholder='По релевантности' size='lg' maxW={{'2xl': '64', xl: '64', lg: '64', md: '100%', sm: '100%'}}>
                <option value='alph'>По алфавиту ↓</option>
                <option value='alphRev'>По алфавиту ↑</option>
            </Select>
        </Stack>
    </Flex>
  )
}

export default Search