import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    useDisclosure
  } from '@chakra-ui/react';
import ModalWindow from '../modal/ModalWindow';

function CountriesListItem({ 
  area,
  capital,
  coatOfArms,
  flags,
  languages,
  maps,
  name,
  population,
  region,
  status,
  subregion,
  timezones
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const data = {
    area,
    capital,
    coatOfArms,
    flags,
    languages,
    maps,
    name,
    population,
    region,
    status,
    subregion,
    timezones
  }
  
  return (
    <Center py={{'2xl': 4, md: 2, base: 2}} onClick={onOpen} sx={{ cursor: 'pointer' }}>
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
              src={flags}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Stack direction={'row'} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {region}
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {
                      !subregion ? '' : '•'
                    }
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {subregion}
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
                'WebkitLineClamp': '1',
                'WebkitBoxOrient': 'vertical'
              }}
            >
              {name}
            </Heading>
          </Stack>
        </Box>
        <ModalWindow isOpen={isOpen} onOpen={onOpen} onClose={onClose} data={data}/>
      </Center>
  )
}

export default CountriesListItem
