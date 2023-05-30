import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function HomePageSplash() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Built for scaling
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Stop OVERfetching
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                GraphQL is a query language that allows fetch requests of data which mirrors from front to back.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Schema',
    content: (
      <>
        <StatsText>Start by</StatsText> defining a schema of desired data.
      </>
    ),
  },
  {
    title: 'JSON format',
    content: (
      <>
        <StatsText>Get back</StatsText> only what you request and save on data bandwidth.
      </>
    ),
  },
  {
    title: 'Scaling',
    content: (
      <>
        <StatsText>Because data</StatsText> is mirroed from client to server, the larger the project, the more data bandwidth you will save.
      </>
    ),
  },
  {
    title: '8M+ Weekly Users',
    content: (
      <>
        <StatsText>Explore</StatsText> a vast library of documentation with an active community of developers contributing to the project.
      </>
    ),
  },
];