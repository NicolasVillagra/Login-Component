import express from 'express';
import sequelize from './sequelize'; // Importa la configuración de Sequelize
import usuariosRouter from './routes/usuarios'; // Importa tus rutas

const app = express();
const port = process.env.PORT || 3001;

// Configura tus rutas
app.use(express.json());

app.use('/api/usuarios', usuariosRouter);

// Inicia la sincronización de Sequelize con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    
    // Inicia el servidor Express
    app.listen(port, () => {
      console.log(`Servidor en funcionamiento en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
