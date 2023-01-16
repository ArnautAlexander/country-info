import React from 'react'
import {
    Box,
    Button,
    SimpleGrid,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Link
  } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import InfoCard from './InfoCard';

function ModalWindow({ isOpen, onClose, data }) {
    return (
        <Box>
          <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{data.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box
                        display='flex'
                        alignItems='center'
                        rounded={'md'}
                        pos={'relative'}
                        height={'280px'}
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
                            src={data.flags}
                        />
                    </Box>
                    <SimpleGrid columns={2} spacing={2} py={4}>
                        <InfoCard topTxt={'Region'} btmTxt={data.region}/>
                        <InfoCard topTxt={'Subregion'} btmTxt={data.subregion}/>
                        <InfoCard topTxt={'Status'} btmTxt={data.status}/>
                        <InfoCard topTxt={'Capital'} btmTxt={data.capital}/>
                        <InfoCard topTxt={'Area'} btmTxt={data.area}/>
                        <InfoCard topTxt={'Population'} btmTxt={data.population}/>
                        <InfoCard topTxt={'Languages'} btmTxt={!data.languages ? '–' : Object.keys(data.languages).join()}/>
                        <InfoCard topTxt={'Timezones'} btmTxt={data.timezones}/>
                    </SimpleGrid>
                    <Link href={data.maps.googleMaps} isExternal>
                        <Button leftIcon={<Search2Icon />} colorScheme='teal' size='lg' w={'100%'} mb={4}>Open on maps</Button>
                    </Link>
                </ModalBody>
              </ModalContent>
          </Modal> 
        </Box>
      )
}

export default ModalWindow
