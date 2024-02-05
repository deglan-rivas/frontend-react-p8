import { Fragment , useCallback, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import {MARCAS, PLANES, YEARS} from '../constants/index.js'

const Resultado = () => {
  const { datos, cotizacion } = useCotizador()

  const [getMarca] = useCallback( MARCAS.filter( m => m.id === Number(datos.marca)), [cotizacion] )

  const [getPlan] = useCallback( PLANES.filter( p => p.id === Number(datos.plan)), [cotizacion] )

  const [getYear] = useCallback( YEARS.filter( y => y === Number(datos.year)), [cotizacion] )
  const yearRef = useRef(datos.year)

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {getMarca?.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {getPlan?.nombre}
      </p>

      <Fragment>
        <p className="my-2">
          <span className="font-bold">Año del Auto: </span>
          {yearRef.current}
        </p>
      </Fragment>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {cotizacion}
      </p>
    </div>
  )
}

export default Resultado