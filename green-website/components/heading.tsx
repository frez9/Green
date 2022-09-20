import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
  } from '@chakra-ui/react';

  
  export default function HeadingWithSubtext() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>This is the headline</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Text>
        </Stack>
      </Box>
    );
  }