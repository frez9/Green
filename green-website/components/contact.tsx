import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
  } from '@chakra-ui/react';

  
  export default function Contact() {
    return (
      <Box position={'relative'}>
        <Container
          maxW={'7xl'}
          columns={{ base: 1, md: 1 }}
          centerContent
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Let's Connect
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, green.400,teal.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                Submit the contact form or feel free to email us directly at hello@getgreen.money
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={25}>
                <Input
                  placeholder="First Name"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Last Name"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Email Address"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="How can we help?"
                  bg={'gray.100'}
                  border={0}
                  h={65}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, green.400,teal.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, green.400,teal.400)',
                  boxShadow: 'xl',
                }}>
                Submit
              </Button>
            </Box>
            form
          </Stack>
        </Container>
      </Box>
    );
  }