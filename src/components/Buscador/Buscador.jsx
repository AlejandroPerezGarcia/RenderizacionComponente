import { Form } from 'react-bootstrap'

const Buscador = ({ filtrarColaboradores }) => {
  return (
    <>
      <Form className='form-group p-3'>
        <input
          type='text'
          name='buscar'
          id='inputBuscar'
          placeholder='Buscar un colaborador'
          onChange={(e) => filtrarColaboradores(e.target.value)}
        />
      </Form>
    </>
  )
}

export default Buscador
