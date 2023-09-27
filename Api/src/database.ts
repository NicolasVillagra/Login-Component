import pgPromise from 'pg-promise';

const pgp = pgPromise();
const connectionString = 'postgres://tu_usuario:tu_contraseña@localhost:5432/nombre_de_tu_base_de_datos';
const db = pgp(connectionString);

export default db;

