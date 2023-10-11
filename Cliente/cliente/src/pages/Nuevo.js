import React, { Component } from 'react';

import axios from 'axios';



class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buscar: '',
            nombre: '',
        };



    }

    obtenerCadenaEvolucion(id) {
        console.log('id:', id);

        const url = 'https://pokeapi.co/api/v2/evolution-chain/' + id;
        fetch(url)
            .then(response => response.json()) // Convierte la respuesta a JSON
            .then(data => {
                this.setState({ evolucion: data.chain.evolution_detail});
                console.log('evolucion',data.chain.evolution_details);
                //alert('evolucion: ',this.state.evolucion);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });

    


    } 
    componentDidMount(pokemon) {


        const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        fetch(url)
            .then(response => response.json()) // Convierte la respuesta a JSON
            .then(data => {
                this.setState({ data: data });
                console.log(data)
                this.obtenerCadenaEvolucion(data.id);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });

    


    } 

handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ [name.name]: value });





};

handleInputChange2 = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
        data: {
            ...prevState.data,
            [name]: value,
        },
    }));
};

// Función para manejar el envío del formulario
handleSubmit = (event) => {
    event.preventDefault();
    const { buscar } = this.state;
    console.log('Nombre:', buscar);
    this.componentDidMount(buscar);
    // Puedes realizar acciones adicionales aquí, como enviar los datos a un servidor.
};

// Función para manejar el envío del formulario
EnviarFormularioPokemon = (event) => {
    event.preventDefault();
    var nombrePokemon = '';
    var tipo = '';
    var evolucion  = '';
    nombrePokemon = this.state.data.name;
    tipo = this.state.data.types[0].type.name;
    evolucion  = this.state.evolucion;


    const data = {
        nombre: nombrePokemon,
        tipo: tipo,
        evolucion : evolucion 
    };
    console.log(data);

    // Realiza una solicitud POST a una API
    axios.post('http://localhost:3001/insertar', data)
        .then(response => {
            // Maneja la respuesta de la solicitud POST
            //console.log('Respuesta del servidor:', response.data);
            alert('registrado');
        })
        .catch(error => {
            // Maneja los errores
            console.error('Error al realizar la solicitud POST:', error);
        });





    // Puedes realizar acciones adicionales aquí, como enviar los datos a un servidor.
};



render() {

    return (


        <div>
            <div class="container-fluid">
                <h1>Nuevo</h1>

                <div class="form-outline w-25">
                    <form onSubmit={this.handleSubmit}>
                        <div class="input-group">
                            <input
                                name="buscar"
                                value={this.state.buscar}
                                onChange={this.handleInputChange}
                                type="text" class="form-control" placeholder="Nombre Pockemon" aria-label="Nombre Pockemon" aria-describedby="basic-addon2"></input>
                            <button
                                type="submit" class="btn btn-primary">Buscar</button>


                        </div>
                    </form>


                </div>


                <section>
                    <div class="row">
                        <div class="col-md-4 mb-2">
                            <div class="card mb-2">
                                <div class="card-header py-3">
                                    <h5 class="mb-0">Datos del Pokemon</h5>
                                </div>
                                <div class="card-body">
                                    <form onSubmit={this.EnviarFormularioPokemon}>

                                        <div class="row mb-2">
                                            <div class="col">
                                                <div class="form-outline">
                                                    {this.state.data && (
                                                        <input name="nombre" onChange={this.handleInputChange2} type="text" value={this.state.data.name} id="form6Example1" class="form-control" />

                                                    )}

                                                    <label class="form-label" for="form6Example1">Nombre Pokemon</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    {this.state.data && (
                                                        <input name="tipo" type="text" value={this.state.data.types[0].type.name} id="form6Example2" class="form-control" />

                                                    )}

                                                    <label class="form-label" for="form6Example2">Tipo</label>
                                                </div>
                                            </div>
                                        </div>






                                        <button type="submit" class="btn btn-primary btn-lg btn-block">
                                            Agregar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>


                <hr />
               




            </div>


        </div>



    );
}
}










export default Formulario;