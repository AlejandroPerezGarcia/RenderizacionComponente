import Table from 'react-bootstrap/Table'

const Listado = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Edad</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Soto</td>
            <td>juans@colaborador.com</td>
            <td>23</td>
            <td>Desarrollador FrontEnd</td>
            <td>99887766</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Juan Soto</td>
            <td>juans@colaborador.com</td>
            <td>23</td>
            <td>Desarrollador FrontEnd</td>
            <td>99887766</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Juan Soto</td>
            <td>juans@colaborador.com</td>
            <td>23</td>
            <td>Desarrollador FrontEnd</td>
            <td>99887766</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Listado
