import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function DualColumnRight({ heading, subtext, imageAlt, imageSrc, firstIconText, secondIconText, thirdIconText, firstIcon, secondIcon, thirdIcon }) {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={imageAlt}
            src={imageSrc}
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading>{heading}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {subtext}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={firstIcon} color={'teal.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={firstIconText}
            />
            { secondIcon &&
            <Feature
              icon={<Icon as={secondIcon} color={'teal.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={secondIconText}
            />
            }
            { thirdIcon &&
            <Feature
              icon={
                <Icon as={thirdIcon} color={'teal.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={thirdIconText}
            />
            }
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}