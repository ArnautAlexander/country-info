import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

function CountriesListItem(props) {
  return (
    <Center py={{'2xl': 4, md: 2, sm: 2}}>
        <Box
          role={'group'}
          p={6}
          w={'full'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'md'}
          rounded={'lg'}
          pos={'relative'}
          >
          <Box
            display='flex'
            alignItems='center'
            rounded={'md'}
            pos={'relative'}
            height={'320px'}
            backgroundColor={'gray.100'}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              width={'100%'}
              height={'100%'}
              objectFit={'contain'}
              src={props.flags}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Stack direction={'row'} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.region}
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {
                      !props.subregion ? '' : '•'
                    }
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.subregion}
                </Text>
            </Stack>
            <Heading 
              fontSize={'2xl'} 
              fontFamily={'body'} 
              fontWeight={500} 
              textAlign={'center'} 
              overflow={'hidden'}
              textOverflow={'ellipsis'}
              display={'-webkit-box'}
              sx={{ 
                '-webkit-line-clamp': '1',
                '-webkit-box-orient': 'vertical'
              }}
            >
              {props.name}
            </Heading>
          </Stack>
        </Box>
      </Center>
  )
}

export default CountriesListItem