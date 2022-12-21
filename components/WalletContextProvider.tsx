import type { FC, ReactNode } from 'react'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'

import '@solana/wallet-adapter-react-ui/styles.css'

const url = clusterApiUrl('devnet')
const wallets = [new PhantomWalletAdapter()]

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConnectionProvider endpoint={url}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletContextProvider
