import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import WalletContextProvider from '../components/WalletContextProvider'
import MetaplexProvider from '../components/MetaplexProvider'

const colors = {
  background: '#1F1F1F',
  accent: '#833BBE',
  bodyText: 'rgba(255, 255, 255, 0.75)',
  secondaryPurple: '#CB8CFF',
  containerBg: 'rgba(255, 255, 255, 0.1)',
  containerBgSecondary: 'rgba(255, 255, 255, 0.05)',
  buttonGreen: '#7EFFA7',
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <MetaplexProvider>
          <Component {...pageProps} />
        </MetaplexProvider>
      </WalletContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
