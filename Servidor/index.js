const express = require('express');
const app = express();
const port = 3001; // Puedes cambiar el puerto según tus preferencias
const bodyParser = require('body-parser');
const cors = require("cors");


app.use(cors());
// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(express.json());

// Importa el módulo de configuración de la base de datos
const { Pool } = require('pg');


const config = {
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'proyecto'

}
const pool = new Pool(config);



// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(bodyParser.json());





app.get('/saludo', (req, res) => {




  res.send('¡Hola, mundo!');
});




// Ruta para obtener datos desde la base de datos
app.get('/pokemons', (req, res) => {
  pool.query('SELECT * FROM pokemon', (error, result) => {
    if (error) {
      res.status(500).send('Error al obtener datos desde la base de datos');
    } else {
      res.json(result.rows);
      pool.end;
    }
  });
});


// Ruta para insertar datos en la base de datos
app.post('/insertar', (req, res) => {
  const { nombre, tipo, evolucion } = req.body;
  //const evolucion = 'abc';
  const status = 'Activo';



  pool.query('INSERT INTO pokemon(nombre,tipo,evolucion,status) VALUES($1,$2,$3,$4)', [nombre, tipo,evolucion,status], (error) => {
    if (error) {
      res.status(500).send('Error al insertar datos en la base de datos');
    } else {
      res.status(201).send('Datos insertados correctamente');
    }
  });
});



app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});