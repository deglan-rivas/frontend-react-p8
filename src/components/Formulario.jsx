import { Fragment } from 'react'

import Error from "./Error"
import { MARCAS, YEARS, PLANES } from '../constants/index.js'
import useCotizador from '../hooks/useCotizador'

const Formulario = () => {
  const { handleChangeDatos, datos, setError, error, cotizarSeguro, mostrarCotizacion } = useCotizador()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(datos)

    if (Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')
    cotizarSeguro()
    // mostrarCotizacion()
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      {error && <Error />}
      <div className="my-5">
        <label htmlFor="" className="block uppercase text-gray-400 font-bold mb-3">
          Marca
        </label>
        <select 
          name="marca" 
          className="w-full p-3 bg-white rounded-md border border-gray-400"
          onChange={e => handleChangeDatos(e)}
          value={datos.marca}
        >
          <option value="">-- Selecciona Marca --</option>
          {MARCAS.map(marca => (
            <option
                key={marca.id}
                value={marca.id}
            >
                {marca.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="my-5">
        <label htmlFor="" className="block uppercase text-gray-400 font-bold mb-3">
          Año
        </label>
        <select 
          name="year" 
          className="w-full p-3 bg-white rounded-md border border-gray-400"
          onChange={e => handleChangeDatos(e)}
          value={datos.year}
        >
          <option value="">-- Selecciona Año --</option>
          {YEARS.map(year => (
            <option
                key={year}
                value={year}
            >
                {year}
            </option>
          ))}
        </select>
      </div>

      <div className="my-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un Plan
        </label>
        <div className='flex gap-3 items-center'>
          {PLANES.map(plan => (
            <Fragment key={plan.id}>
              <label>
                {plan.nombre}
              </label>
              <input
                type="radio"
                name="plan"
                value={plan.id}
                onChange={ e => handleChangeDatos(e)}
              />
            </Fragment>
          ))}
        </div>

      </div>
      
      <input 
        type="submit"
        className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
        value="Cotizar"
      />
    </form>
  )
}

export default Formulario