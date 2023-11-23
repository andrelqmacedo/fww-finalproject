import { Sequelize } from "sequelize";

const DBNAME = "db_filmes";
const DBUSERNAME = "root";
const DBPASSWORD = "12345678";
const DBHOST = "localhost";
const DBPORT = "3306";

const db = new Sequelize(DBNAME, DBUSERNAME, DBPASSWORD, {
    host: DBHOST,
    port: DBPORT,
    dialect: "mysql"
});

export default db;