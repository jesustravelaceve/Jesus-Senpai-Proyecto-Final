import '../index.css';
import React from 'react';
import borrar from '../Imagenes/iconos/borrar.png';

export default class PreOrden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 1,
    }

  }

  aumentarCantidad = (event) => {
    event.preventDefault();
    let contador = this.state.cantidad + 1
    this.setState({ cantidad: contador });
  }

  render() {
    return (

      <ul className="list-group">
        <li id={this.props.i.comida} value={this.props.i.comida} className="item-menu list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span>{this.props.i.comida}</span>
            <span className="badge badge-primary badge-pill">{this.state.cantidad}</span>
             <input type="hidden"  className="comida" value={this.props.i.comida} />
             <input type="hidden" className="cantidad" value={this.state.cantidad}/>
          
          </div>
          <div>
            <a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={this.aumentarCantidad}>
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg></a>

            <a href="#"><img src={borrar} onClick={this.props.evento} name={this.props.i.comida} className="icono-borrar" /></a>
          </div>

        </li>
      </ul>

    );
  }

}
