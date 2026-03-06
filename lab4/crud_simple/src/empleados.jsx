import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const data = [
    {
        id: 1,
        nombre: "Andrea López",
        edad: 27,
        area: "Technology",
        rol: "Software Engineer",
        seniority: "Analyst",
        correo: "andrea.lopez@accenture.com",
        horario: "9:00 - 18:00",
        modalidad: "Híbrido",
        jefeDirecto: "Carlos Méndez",
        password: "1234",
    },
    {
        id: 2,
        nombre: "Luis Ramírez",
        edad: 31,
        area: "Cloud Engineering",
        rol: "Cloud Engineer",
        seniority: "Senior Analyst",
        correo: "luis.ramirez@accenture.com",
        horario: "8:00 - 17:00",
        modalidad: "Remoto",
        jefeDirecto: "Mariana Torres",
        password: "5678",
    },
    {
        id: 3,
        nombre: "Sofía Hernández",
        edad: 29,
        area: "Data & AI",
        rol: "Data Engineer",
        seniority: "Consultant",
        correo: "sofia.hernandez@accenture.com",
        horario: "9:00 - 18:00",
        modalidad: "Híbrido",
        jefeDirecto: "David Ortega",
        password: "9012",
    },
    {
        id: 4,
        nombre: "Daniel Castillo",
        edad: 35,
        area: "Cybersecurity",
        rol: "Security Analyst",
        seniority: "Senior Consultant",
        correo: "daniel.castillo@accenture.com",
        horario: "10:00 - 19:00",
        modalidad: "Remoto",
        jefeDirecto: "Laura Vargas",
        password: "3456",
    },
    {
        id: 5,
        nombre: "Valeria Gómez",
        edad: 26,
        area: "Digital Experience",
        rol: "Frontend Developer",
        seniority: "Analyst",
        correo: "valeria.gomez@accenture.com",
        horario: "9:00 - 18:00",
        modalidad: "Híbrido",
        jefeDirecto: "Carlos Méndez",
        password: "7890",
    },
    {
        id: 6,
        nombre: "Ricardo Navarro",
        edad: 33,
        area: "Technology",
        rol: "Backend Engineer",
        seniority: "Senior Analyst",
        correo: "ricardo.navarro@accenture.com",
        horario: "8:00 - 17:00",
        modalidad: "Remoto",
        jefeDirecto: "Mariana Torres",
        password: "2345",
    },
    {
        id: 7,
        nombre: "Fernanda Salinas",
        edad: 30,
        area: "Project Management",
        rol: "Scrum Master",
        seniority: "Consultant",
        correo: "fernanda.salinas@accenture.com",
        horario: "9:00 - 18:00",
        modalidad: "Híbrido",
        jefeDirecto: "Alejandro Ruiz",
        password: "6789",
    },
    {
        id: 8,
        nombre: "Alejandro Ruiz",
        edad: 38,
        area: "Consulting",
        rol: "IT Project Manager",
        seniority: "Manager",
        correo: "alejandro.ruiz@accenture.com",
        horario: "9:00 - 18:00",
        modalidad: "Híbrido",
        jefeDirecto: "Director Technology",
        password: "0123",
    },
    {
        id: 9,
        nombre: "Mariana Torres",
        edad: 40,
        area: "Cloud Engineering",
        rol: "Cloud Architect",
        seniority: "Senior Manager",
        correo: "mariana.torres@accenture.com",
        horario: "9:00 - 18:00",
        modalidad: "Remoto",
        jefeDirecto: "Director Cloud Services",
        password: "4567",
    },
];

class Empleados extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
    id: "",
    nombre: "",
    edad: "",
    area: "",
    rol: "",
    seniority: "",
    correo: "",
    horario: "",
    modalidad: "",
    jefeDirecto: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

    editar = (dato) => {
    const arreglo = this.state.data.map((registro) =>
        registro.id === dato.id ? dato : registro
    );

    this.setState({ data: arreglo, modalActualizar: false });
    };

  eliminar = (dato) => {
    const opcion = window.confirm(
      "Estás seguro que deseas eliminar el elemento " + dato.id
    );

    if (opcion) {
      const arreglo = this.state.data.filter((registro) => registro.id !== dato.id);
      this.setState({ data: arreglo });
    }
  };

  insertar = () => {
    const valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;

    const lista = [...this.state.data, valorNuevo];

    this.setState({
      data: lista,
      modalInsertar: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={this.mostrarModalInsertar}>
            Crear
          </Button>
          <br />
          <br />

          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Área</th>
                <th>Rol</th>
                <th>Seniority</th>
                <th>Modalidad</th>
                <th>Horario</th>
                <th>Jefe</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.area}</td>
                <td>{dato.rol}</td>
                <td>{dato.seniority}</td>
                <td>{dato.modalidad}</td>
                <td>{dato.horario}</td>
                <td>{dato.jefeDirecto}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      color="danger"
                      onClick={() => this.eliminar(dato)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {/* MODAL INSERTAR */}
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <h3>Insertar registro</h3>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Edad:</label>
            <input className="form-control" name="edad" type="number" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Área:</label>
            <input className="form-control" name="area" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Rol:</label>
            <input className="form-control" name="rol" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Seniority:</label>
            <input className="form-control" name="seniority" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Correo:</label>
            <input className="form-control" name="correo" type="email" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Modalidad:</label>
            <input className="form-control" name="modalidad" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Horario:</label>
            <input className="form-control" name="horario" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Jefe Directo:</label>
            <input className="form-control" name="jefeDirecto" type="text" onChange={this.handleChange}/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.insertar}>
              Insertar
            </Button>
            <Button color="danger" onClick={this.cerrarModalInsertar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        {/* MODAL ACTUALIZAR */}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <h3>Editar Registro</h3>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>

            <Button
              color="danger"
              onClick={this.cerrarModalActualizar}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Empleados;