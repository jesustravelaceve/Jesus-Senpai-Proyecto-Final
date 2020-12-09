import hamburguesa from '../Imagenes/Menu/hamburguesa.png';
import hotDog from '../Imagenes/Menu/hotDog.png';
import pizza from '../Imagenes/Menu/pizza.png';
import coca from '../Imagenes/Menu/coca.png';
import agua from '../Imagenes/Menu/agua.png';
import naranja from '../Imagenes/Menu/naranja.png';
import torta from '../Imagenes/Menu/torta.png';
import helado from '../Imagenes/Menu/helado.png';
import gelatina from '../Imagenes/Menu/gelatina.png';
import '../menu.css';
import PreOrden from './PreOrden';
import React from 'react';
import {
    Link
} from "react-router-dom";


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comida: "",
            preorden: [],
        }

    }

    cargarPagina = (event) => {

        if (this.state.preorden.length == 0) {
            document.getElementById('btn-registrar').style.display = 'none';

        } else {
            document.getElementById('btn-registrar').style.display = 'block';
        }
    }

    actualizarComida = (event) => {
        this.setState({ comida: event.target.name });
    }

    agregarComida = (event) => {

        event.preventDefault();
        let nuevaComida = {
            comida: this.state.comida,
        }

        let listaComida = [...this.state.preorden, nuevaComida];
        this.setState({
            preorden: listaComida,

        })
    }

    eliminarComida = (event) => {

        event.preventDefault();
        let comida = document.getElementById(event.target.name);
        let claseComida = document.getElementsByClassName('comida');
        comida.remove();

        if (claseComida.length == 0) {
            document.getElementById('btn-registrar').style.display = 'none';

        } else {
            document.getElementById('btn-registrar').style.display = 'block';
        }

    }

    enviarOrden = (event) => {
        let comida = document.getElementsByClassName('comida');
        let cantidad = document.getElementsByClassName('cantidad');
        //console.log(comida.length);
        let listaOrden = [];
        for (let i = 0; i < comida.length; i++) {
            listaOrden.push(cantidad[i].value + " " + comida[i].value + " / ");
        }


        const registroOrden = {
            orden: listaOrden,
            fecha: this.obtenerFecha(),
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: registroOrden })
        };

        const response = fetch('http://165.22.191.161/api/jesus/ordenes', requestOptions);
        this.setState({ preorden: [] });

        alert('Pedido creado Exitosamente');


    }
    obtenerFecha() {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var hora = currentDate.getHours();
        var minuto = currentDate.getMinutes();
        var segundo = currentDate.getSeconds();

        return day + "/" + month + "/" + year + " " + hora + ":" + minuto + ":" + segundo;
    }

    render() {


        return (

            <div onLoad={this.cargarPagina}>
                <div className="row col-sm-12 col-md-12 col-lg-12 alert alert-dark justify-content-between" role="alert">
                    <div><strong>Seleccione los alimentos dando clic a cada imagen para crear un pedido.</strong> Se puede aumentar la cantidad en el icono de '+'</div>
                    <Link to='/' alt='Menu'><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    </svg></Link>
                </div>
                <div className="menu d-flex justify-content-center row col-sm-12 col-md-12 col-lg-12">
                    <a href="#"><img src={hamburguesa} name="Hamburguesa Clásica" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={hotDog} name="Hot Dog Grande" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={pizza} name="Pizza Individual" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={coca} name="Bebida Gaseosa" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={agua} name="Agua Mineral" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={naranja} name="Jugo Natural de Naranja" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={torta} name="Torta de chocolate" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={helado} name="Helado cremoso" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                    <a href="#"><img src={gelatina} name="Gelatina de frutas" onClick={this.agregarComida} onMouseOver={this.actualizarComida} /></a>
                </div>
                <div className=" col-sm-12 col-md-12 col-lg-12">
                    {
                        this.state.preorden.map(i => {
                            return <PreOrden i={i} evento={this.eliminarComida} />

                        })
                    }

                    <div className="botones">
                        <a id="btn-registrar" href="" className="btninicio" onClick={this.enviarOrden}>Crear Pedido</a>

                    </div>

                </div>

            </div>
        );


    }

}

