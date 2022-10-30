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
  
  const IMAGE =
    'https://flagcdn.com/bb.svg'

function CountriesListItem() {
  return (
    <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Stack direction={'row'} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    North America
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    •
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    Caribbean
                </Text>
            </Stack>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              Barbados
            </Heading>
          </Stack>
        </Box>
      </Center>
  )
}

export default CountriesListItem