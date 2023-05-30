'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { client } from '@/lib/graphqlClient';
import { Provider } from 'urql';

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <Provider value={client}>
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </Provider>
  )
}