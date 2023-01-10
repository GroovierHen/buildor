import type { NextPage } from 'next'
import { useWallet } from '@solana/wallet-adapter-react'

import Disconnected from '../components/Disconnected'
import Connected from '../components/Connected'
import MainLayout from '../components/MainLayout'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <MainLayout> {connected ? <Connected /> : <Disconnected />}</MainLayout>
  )
}

export default Home
