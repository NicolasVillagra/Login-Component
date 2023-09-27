import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize'; // Importa la configuración de Sequelize

class Usuario extends Model {
  public id!: number;
  public nombre!: string;
  public correo!: string;
  // Agrega otras propiedades según tus necesidades
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Define otras columnas aquí
  },
  {
    sequelize, // Pasa la instancia de Sequelize
    modelName: 'Usuario', // Nombre del modelo
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
  }
);

export default Usuario;
