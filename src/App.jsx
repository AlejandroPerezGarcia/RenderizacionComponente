import Listado from './components/Listado/Listado'
import Buscador from './components/Buscador/Buscador'
import Formulario from './components/Formulario/Formulario'
import Alert from './components/Alert/Alert'
import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'

const App = () => {
  const [baseColaboradores, setBaseColabodarores] = useState(BaseColaboradores)
  console.log(baseColaboradores)
  console.log(setBaseColabodarores)
  const [alert, setAlert] = useState({ message: '', color: '' })
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
          <Formulario baseColaboradores={baseColaboradores} setBaseColabodarores={setBaseColabodarores} setAlert={setAlert} />
          {alert.message !== '' && <Alert message={alert.message} color={alert.color} />}
        </siderbar>
      </div>
    </>
  )
}

export default App
