import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Formulario = ({ setBaseColabodarores, baseColaboradores, setAlert }) => {
  const [nombreColaborador, setNombre] = useState('')
  const [correoColaborador, setCorreo] = useState('')
  const [edadColaborador, setEdad] = useState('')
  const [cargoColaborador, setCargo] = useState('')
  const [telefonoColaborador, setTelefono] = useState('')
  const inicio = 3
  const fin = 100
  const random = inicio + Math.floor(Math.random() * fin)

  const enviarFormulario = (e) => {
    e.preventDefault()

    if (
      nombreColaborador.trim() === '' ||
      correoColaborador.trim() === '' ||
      edadColaborador.trim() === '' ||
      cargoColaborador.trim() === '' ||
      telefonoColaborador.trim() === ''
    ) {
      setAlert({ message: 'Completa todos los campos', color: 'danger' })
      return
    }
    setAlert({ message: '¡Colaborador Agregado!', color: 'success' })
    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')

    const nuevoRegistro = {
      id: random,
      nombre: nombreColaborador,
      correo: correoColaborador,
      edad: edadColaborador,
      cargo: cargoColaborador,
      telefono: telefonoColaborador
    }
    setBaseColabodarores([...baseColaboradores, nuevoRegistro])
  }

  const capturarInputNombre = (e) => {
    setNombre(e.target.value)
  }

  const capturarInputCorreo = (e) => {
    setCorreo(e.target.value)
  }

  const capturarInputEdad = (e) => {
    setEdad(e.target.value)
  }

  const capturarInputCargo = (e) => {
    setCargo(e.target.value)
  }

  const capturarInputTelefono = (e) => {
    setTelefono(e.target.value)
  }

  return (
    <>
      <Form className='container text-center formulario' onSubmit={enviarFormulario}>
        <h4>Agregar Colaborador</h4>
        <div className='form-group p-2'>
          <input
            type='text'
            name='nombreColaborador'
            className='form-control'
            id='inputNombre'
            placeholder='Nombre del Colaborador'
            onChange={capturarInputNombre}
            value={nombreColaborador}
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='email'
            name='emailColaborador'
            className='form-control'
            id='inputEmail'
            placeholder='Correo del Colaborador'
            onChange={capturarInputCorreo}
            value={correoColaborador}
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='number'
            name='edadColaborador'
            className='form-control'
            id='inputEdad'
            placeholder='Edad del Colaborador'
            onChange={capturarInputEdad}
            value={edadColaborador}
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='text'
            name='cargoColaborador'
            className='form-control'
            id='inputCargo'
            placeholder='Cargo del Colaborador'
            onChange={capturarInputCargo}
            value={cargoColaborador}
          />
        </div>
        <div className='form-group p-2'>
          <input
            type='text'
            name='telefonoColaborador'
            className='form-control'
            id='inputTelefono'
            placeholder='Telefono del Colaborador'
            onChange={capturarInputTelefono}
            value={telefonoColaborador}
          />
        </div>
        <Button type='submit' className='btn  btnRegistro m-3' variant='primary' id='boton-enviar'> Agregar Colaborador</Button>

      </Form>

    </>
  )
}

export default Formulario
