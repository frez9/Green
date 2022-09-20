import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function ThreeColumnGrid({ firstIcon, firstTitle, firstSubtext,secondIcon, secondTitle, secondSubtext, thirdIcon, thirdTitle, thirdSubtext }) {
  return (
    <Box p={8} align={'center'}>
      <Heading>You can count on us.</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={50}>
        <Feature
          icon={<Icon as={firstIcon} w={10} h={10} />}
          title={firstTitle}
          text={firstSubtext}
        />
        <Feature
          icon={<Icon as={secondIcon} w={10} h={10} />}
          title={secondTitle}
          text={secondSubtext}
        />
        <Feature
          icon={<Icon as={thirdIcon} w={10} h={10} />}
          title={thirdTitle}
          text={thirdSubtext}
        />
      </SimpleGrid>
    </Box>
  );
}