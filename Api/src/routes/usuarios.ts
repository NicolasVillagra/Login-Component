import express from 'express';
import usuariosController from '../controllers/usuariosController';

const router = express.Router();

// Rutas relacionadas con usuarios
router.get('/', usuariosController.getAllUsuarios);
router.post('/', usuariosController.createUsuario);

export default router;
