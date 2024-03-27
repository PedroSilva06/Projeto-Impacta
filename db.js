import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Derpo1996!",
    datebase: "crud"
});