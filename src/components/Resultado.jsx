import { Fragment } from 'react'

const Resultado = () => {
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        nombre
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        nombre
      </p>

      <Fragment>
      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        current
      </p>
      </Fragment>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        Ga
      </p>
    </div>
  )
}

export default Resultado