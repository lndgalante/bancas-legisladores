import React from 'react'

const partidosColores = {
  'vamos-juntos': '#f8d21c',
  'bloque-peronista': '#0f30a7',
  'partido-socialista': '#e73631',
  'autodeterminacion-libertad': '#872a77',
  'frente-izquierda': '#781715',
  'unidad-ciudadana': '#9ad1d8',
  'mejor-ciudad': '#347737',
  evolucion: '#49b0d5',
  autoridades: '#BFC5D2',
}

const Bancas = ({ bancas }) => (
  <svg width='842' height='450' viewBox='0 0 842 450' fill='none' xmlns='http://www.w3.org/2000/svg'>
    {Object.entries(bancas).map(([_nombreFila, fila]) =>
      fila.map(banca => <path key={banca.d} d={banca.d} fill={partidosColores[banca.partido]} />)
    )}
  </svg>
)

export default Bancas
