import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Formulario = () => {
  return (
    <>
      <Form className='container text-center formulario'>
        <h4>Agregar Colaborador</h4>
        <div className='form-group p-2'>
          <input
            type='text'
            name='nombre'
            className='form-control'
            id='inputNombre'
            placeholder='Nombre del Colaborador'
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='email'
            name='email'
            className='form-control'
            id='inputEmail'
            placeholder='Correo del Colaborador'
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='number'
            name='edad'
            className='form-control'
            id='inputEdad'
            placeholder='Edad del Colaborador'
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='text'
            name='cargo'
            className='form-control'
            id='inputCargo'
            placeholder='Cargo del Colaborador'
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='text'
            name='telefono'
            className='form-control'
            id='inputTelefono'
            placeholder='Telefono del Colaborador'
          />
        </div>
        <Button type='submit' className='btn  btnRegistro m-3' variant='primary' id='boton-enviar'> Agregar Colaborador</Button>

      </Form>

    </>
  )
}

export default Formulario
