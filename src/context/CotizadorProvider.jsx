import { createContext } from 'react'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
  return (
    <CotizadorContext.Provider
      value = {{
        'ga': ''
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext