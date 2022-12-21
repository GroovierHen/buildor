import type { FC } from 'react'
import dynamic from 'next/dynamic'
import { HStack, Spacer } from '@chakra-ui/react'

import styles from '../styles/Home.module.css'

const WalletMultiButton = dynamic(
  () =>
    import('@solana/wallet-adapter-react-ui').then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
)

const NavBar: FC = () => {
  return (
    <HStack width="full" padding={4}>
      <Spacer />
      <WalletMultiButton className={styles['wallet-adapter-button-trigger']} />
    </HStack>
  )
}

export default NavBar
