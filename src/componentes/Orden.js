import '../index.css';
import React from 'react';
import {
  Link
} from "react-router-dom";


export default class Orden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orden: [],
      ordenAux: [],
      q: "",
    }

  }
  componentDidMount() {
    this.obtenerOrdenesAPI();
  }

  obtenerOrdenesAPI() {
    fetch("http://165.22.191.161/api/jesus/ordenes")
      .then(res => res.json())
      .then(
        //Todo OK
        (result) => {
          this.setState({
            orden: result.data,
            ordenAux: result.data,
          });
        },
        //Error
        (error) => {
          alert("Error al obtener datos");
        }
      );
  }

  buscar = (event) => {

    this.setState({ q: event.target.value });


    let q = event.target.value;
    let listaFiltrada = [];

    this.state.orden.map(item => {
      let nOrden = item.id.toString();
      if (nOrden.includes(q)) {

        listaFiltrada.push(item);

      }
    })
    this.setState({ ordenAux: listaFiltrada });

  }

  render() {
    return (
     
      <div>
        <div className="row col-sm-12 col-md-12 col-lg-12 alert alert-dark justify-content-between" role="alert">
          <div><strong>En esta sección podrá consultar las ordenes o pedidos realizados.</strong> Se puede filtrar por nro de orden</div>
          <Link to='/' alt='Menu'><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
            <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
          </svg></Link>
        </div>
        <div className="buscador">
          <p>Escriba el numero de orden para buscar:</p>
          <input
            type="number"
            className="form-control"
            placeholder="Buscar..."
            name="buscador"
            value={this.state.q}
            onChange={this.buscar} />
        </div>
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nro de Orden</th>
              <th scope="col">Fecha y Hora</th>
              <th scope="col">Orden</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ordenAux.map(item => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.fecha}</td>
                  <td>{item.orden}</td>
                </tr>

              )
            })}
          </tbody>
        </table>
      </div>
      
    );
  }

}
