import Table from 'react-bootstrap/Table'

const Listado = ({ baseColaboradores }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {baseColaboradores.map(lista =>
            <tr key={lista.id}>
              <td>{lista.id}</td>
              <td>{lista.nombre}</td>
              <td>{lista.correo} </td>
              <td>{lista.edad} </td>
              <td>{lista.cargo} </td>
              <td>{lista.telefono} </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default Listado
