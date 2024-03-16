import Listado from './components/Listado/Listado'
import Buscador from './components/Buscador/Buscador'
import Formulario from './components/Formulario/Formulario'
import Alert from './components/Alert/Alert'
import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'

const App = () => {
  const [baseColaboradores, setBaseColabodarores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ message: '', color: '' })
  const filtrarColaboradores = (busqueda) => {
    const colaboradoresFiltrados = BaseColaboradores.filter(colaborador =>
      Object.values(colaborador).some(value =>
        value.toLowerCase().includes(busqueda.toLowerCase())
      )
    )
    setBaseColabodarores(colaboradoresFiltrados)
  }
  return (
    <>
      <div className='container p-4' id='page'>
        <header>
          <h1>Lista de colaboradores</h1>
          <Buscador filtrarColaboradores={filtrarColaboradores} />
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
