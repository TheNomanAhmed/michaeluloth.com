function Base({ children }) {
  return (
    <MinHeight100>
      <Metadata
        // preload={[
        //   { href: avenirRegular, as: `font`, type: `font/woff2` },
        //   { href: avenirHeavy, as: `font`, type: `font/woff2` }
        // ]}
        preconnect={[`https://unpkg.com`]}
      />
      <CustomProperties />
      <Reset />

      <Top />
      {children}
      <Bottom />
    </MinHeight100>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const MinHeight100 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import Metadata from './Metadata'
import Top from './Top'
import Bottom from './Bottom'

import { CustomProperties, Reset } from '../styles'
// import '../styles/base/font-face.css'
// import '@reach/dialog/styles.css'

// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

export default Base
