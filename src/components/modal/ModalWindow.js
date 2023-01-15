import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure,
    Button
  } from '@chakra-ui/react';

function ModalWindow({ isOpen, onOpen, onClose, data }) {
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
                            src={data.flags}
                        />
                    </Box>
                </ModalBody>
        
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
          </Modal> 
        </Box>
      )
}

export default ModalWindow
