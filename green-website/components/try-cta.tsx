import {
  Stack,
  Button,
  Heading,
  Container,
} from '@chakra-ui/react';

export default function TryCTA() {
  return (
      <Container p={6} direction={'column'}>
        <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Heading mb={5}>Don't just take our word for it.</Heading>
            <Button
              as={'a'}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              href={'/how-it-works'}
              _hover={{
                bg: 'green.500',
              }}>
              Give it a quick try
            </Button>
        </Stack>
      </Container>
  );
}