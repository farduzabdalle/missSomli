import { useState } from 'react'
import Header from './Components/Header/Header'
import Timer from './Components/Timer/Timer'
import Comptitors from './Components/Comptitors/Comptitors'
import VoteModal from './Components/Modal/VoteModal'

function App() {
 

  return (
    <>
      <Header/>
      <Timer/>
      <Comptitors/>
      <VoteModal/>
 </>
  )
}

export default App
