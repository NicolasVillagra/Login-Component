import { Request, Response } from 'express';
import Usuario from '../models/usuarioModel'; // Importa el modelo de Usuario

const usuariosController = {
  getAllUsuarios: async (req: Request, res: Response) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({error:"no hay usuarios"});
    }
  },
  createUsuario: async (req: Request, res: Response) => {
    try {
      const { nombre, correo } = req.body; // Obtén los datos del cuerpo de la solicitud
      
      // Crea un nuevo usuario en la base de datos
      const nuevoUsuario = await Usuario.create({
        nombre,
        correo,
        // Otros campos según tu modelo
      });

      res.status(201).json(nuevoUsuario); // Devuelve el nuevo usuario creado
    } catch (error) {
        console.log(error);
        
      res.status(500).json(error);
    }
  },
  // Agrega otras funciones del controlador aquí
};

export default usuariosController;
