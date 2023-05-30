import {
    Box,
    Button,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={'gray.800'} position={'relative'}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <FormControl id="search">
            <FormLabel color={'white'}>Search Database</FormLabel>
            <Input type="search" variant='filled'/>
            <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'teal.400'}
            href={'/searchTeams'}
            _hover={{
              bg: 'teal.300',
            }}>
              Search Teams on Rest API
            </Button>
            <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'red.600'}
            href={'/searchRockets'}
            _hover={{
              bg: 'red.400',
            }}>
              Search Rockets using URQL fetch
            </Button>
          </FormControl>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter color='white'/>
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube color='white'/>
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram color='white'/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }