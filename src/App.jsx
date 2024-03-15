import Listado from './components/Listado/Listado'
import Buscador from './components/Buscador/Buscador'
import Formulario from './components/Formulario/Formulario'
import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'

const App = () => {
  const [baseColaboradores, setBaseColabodarores] = useState(BaseColaboradores)
  console.log(baseColaboradores)
  console.log(setBaseColabodarores)
  return (
    <>
      <div className='container p-4' id='page'>
        <header>
          <h1>Lista de colaboradores</h1>
          <Buscador />
        </header>
        <main className='container listado'>
          <Listado baseColaboradores={baseColaboradores} />
        </main>
        <siderbar>
          <Formulario baseColaboradores={baseColaboradores} setBaseColabodarores={setBaseColabodarores} />
        </siderbar>
      </div>
    </>
  )
}

export default App
