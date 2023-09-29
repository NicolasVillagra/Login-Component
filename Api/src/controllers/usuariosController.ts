import { Request, Response } from 'express';
import Usuario from '../models/usuarioModel'; // Importa el modelo de Usuario
import bcrypt from 'bcrypt';

const usuariosController = {
  getAllUsuarios: async (req: Request, res: Response) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({error:"no hay usuarios"});
    }
  },
  getOneUsuario: async (req: Request, res: Response) => {
    const { nombre, password } = req.query; // Obtén los valores de la consulta de URL
  
    try {
      const usuario = await Usuario.findOne({
        where: { nombre: nombre }
      });
  
      if (usuario) {
        if (typeof password === 'string') {
          // Verificar si la contraseña proporcionada coincide con la contraseña almacenada
          const passwordMatch = await bcrypt.compare(password, usuario.getDataValue('password'));
  
          if (passwordMatch) {
            // Contraseña válida, puedes considerar al usuario autenticado
            res.json({ mensaje: "Inicio de sesión exitoso" });
          } else {
            // Contraseña incorrecta
            res.status(401).json({ error: "Contraseña incorrecta" });
          }
        } else {
          // Si password no es una cadena válida
          res.status(400).json({ error: "Contraseña no válida" });
        }
      } else {
        // Usuario no encontrado
        res.status(404).json({ error: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al buscar el usuario" });
    }
  },
  createUsuario: async (req: Request, res: Response) => {
    try {
      const { nombre, password } = req.body;
  
      if (!nombre || !password) {
        return res.status(400).json({ error: 'El nombre y la contraseña son obligatorios' });
      }
  
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      console.log('Hash de contraseña:', typeof passwordHash);
  
      // Crea un nuevo usuario en la base de datos
      const nuevoUsuario = await Usuario.create({
        nombre,
        password:passwordHash,
        // Otros campos según tu modelo
      });
  
      res.status(201).json(nuevoUsuario); // Devuelve el nuevo usuario creado
    } catch (error) {
      
      console.error(error);
      res.status(500).json({ error: 'Ocurrió un error al crear el usuario' });
    }
  }
  // Agrega otras funciones del controlador aquí
};

export default usuariosController;
