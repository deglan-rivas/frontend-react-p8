import { useState, createContext, useEffect } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers/index.js'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
  const [error, setError] = useState('')
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  const [cotizacion, setCotizacion] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [wasCalculated, setWasCalculated] = useState(false)

  const handleChangeDatos = e => {
    setDatos(
      {
        ...datos,
        [e.target.name]: e.target.value
      }
    )

    // console.log(datos)
    // console.log(e.target.name, e.target.value)
  }

  const cotizarSeguro = () => {
    let resultado = 2000
    const diferencia = obtenerDiferenciaYear(datos.year)

    resultado -= ((diferencia * 3) * resultado) / 100
    resultado *= calcularMarca(datos.marca)
    resultado *= calcularPlan(datos.plan)
    resultado = formatearDinero(resultado)
    setCotizacion(resultado)
  }
  
  const mostrarCotizacion = () => {
    setWasCalculated(false)
    setIsLoading(true)
  
    setTimeout(() => {
      setIsLoading(false)
      setWasCalculated(true)
    }, 2000);
  }

  useEffect( () => {
    // if (!Object.values(datos).includes('')) {
    if (cotizacion !== 0) {
      mostrarCotizacion()
      // console.log('se mostrará spinner')
      // console.log(datos)
    }
  }, [cotizacion])

  return (
    <CotizadorContext.Provider
      value = {{
        error,
        setError,
        handleChangeDatos,
        datos,
        cotizacion,
        isLoading,
        cotizarSeguro,
        mostrarCotizacion,
        wasCalculated
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