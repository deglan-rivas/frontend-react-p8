import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from '../hooks/useCotizador'

const AppSeguro = () => {
  const { isLoading, cotizacion, datos, wasCalculated} = useCotizador()

  return (
    <>
      <header className="my-10">
        <h1 className="text-white font-bold text-4xl text-center">Cotizador de Seguros de Auto</h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-md p-10 mb-10">
        <Formulario

        />
        {/* { isLoading 
          ? <Spinner/>
          : <Resultado/>
        } */}

        {/* {isLoading ? <Spinner/> : ''}
        {(Object.values(datos).includes('') || cotizacion === 0) ? '' : <Resultado/> } */}

        {isLoading ? <Spinner/> : ''}
        {wasCalculated ? <Resultado/> : ''}
      </main>

    </>
  )
}

export default AppSeguro