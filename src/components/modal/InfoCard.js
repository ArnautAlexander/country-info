import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/react'

function InfoCard({ topTxt, btmTxt}) {
  return (
    <Flex alignItems='center' gap={4} p={2} border='1px' borderColor='gray.500' rounded={'md'}> 
        <Flex flexDirection='column' w={'100%'}>
            <Text color={'gray.500'} fontSize={'sm'}>
                {topTxt}
            </Text>
            <Heading 
              fontSize={'lg'} 
              fontFamily={'body'} 
              fontWeight={500}  
              overflow={'hidden'}
              textOverflow={'ellipsis'}
              display={'-webkit-box'}
              sx={{ 
                'WebkitLineClamp': '1',
                'WebkitBoxOrient': 'vertical'
              }}
            >
              {btmTxt}
            </Heading>
        </Flex>
    </Flex>
  )
}

export default InfoCard
