import React, { useState } from 'react'

import Bancas from './Bancas'
import data from '../assets/bancas-partidos.json'

const App = props => {
  const [bancas, setBancas] = useState(data)

  return (
    <div className='container'>
      <h1 className='title'>Banca Legisladores</h1>
      <Bancas bancas={bancas} />
    </div>
  )
}

export default App
