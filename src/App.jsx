import Listado from './components/Listado/Listado'
import Buscador from './components/Buscador/Buscador'
import Formulario from './components/Formulario/Formulario'

const App = () => {
  return (
    <>
      <div className='container p-4' id='page'>
        <header>
          <h1>Lista de colaboradores</h1>
          <Buscador />
        </header>
        <main className='container listado'>
          <Listado />
        </main>
        <siderbar>
          <Formulario />
        </siderbar>
      </div>
    </>
  )
}

export default App
