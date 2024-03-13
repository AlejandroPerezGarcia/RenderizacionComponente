import { Form } from 'react-bootstrap'

const Buscador = () => {
  return (
    <>
      <Form className='form-group p-3'>
        <input
          type='text'
          name='buscar'
          id='inputBuscar'
          placeholder='Buscar un colaborador'
        />
      </Form>
    </>
  )
}

export default Buscador
