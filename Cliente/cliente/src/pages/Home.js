
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios';



class Formulario extends Component {

  getPokemos = () => {
    axios.get('http://localhost:3001/pokemons').then((response)=>{
      //this.state.pokemonList(response.data);
      this.setState({ pokemonList: response.data });
      //alert('hola');
    });
  }

  constructor(props) {
    super(props);
    this.getPokemos();
    this.state = {
      nombre: '',
      
      pokemonList : [],
    };
  }

  // Función para manejar cambios en los campos de entrada
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Función para manejar el envío del formulario
  handleSubmit = (event) => {
    event.preventDefault();
    const { nombre } = this.state;
    console.log('Nombre:', nombre);
    // Puedes realizar acciones adicionales aquí, como enviar los datos a un servidor.
  };
  
 
  render() {
    

    return (


      <div>

        <div class="container-fluid">
          <h1>home</h1>

          <div class="form-outline w-25">
            <form onSubmit={this.handleSubmit}>
              <div class="input-group">
                <input
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.handleInputChange}
                  type="text" class="form-control" placeholder="Buscar Pockemon" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                <button
                  type="submit" class="btn btn-primary">Buscar</button>


              </div>
            </form>


          </div>

          <hr />
          <button type="button" class="btn btn-primary">
            <Link class="nav-link" to="/nuevo">Nuevo</Link>
          </button>

          

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre Pokemon</th>
                <th scope="col">Tipo</th>
                <th scope="col">Evolución</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
               
            {
              this.state.pokemonList.map((val,key)=>{
                return <tr>
                <th scope="row">{val.id}</th>
                <td>{val.nombre}</td>
                <td>{val.tipo}</td>
                <td>{val.evolucion}</td>
                <td>{val.status}</td>
              </tr>
              })
            }
              
             
            </tbody>
          </table>
        </div>


      </div>



    );
  }
}

export default Formulario;