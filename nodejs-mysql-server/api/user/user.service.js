const pool = require("../../config/database")

module.exports = {
    create: (data,callback) =>{
          pool.query(
            `insert into registration(firstname,lastname,contact,email,password,isadmin)
            values(?,?,?,?,?,?)`,
            [
    
                data.firstname,
                data.lastname,
                data.contact,
                data.email,
                data.password,
                data.isadmin
            ],
            (error,results,fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null,results);
            }
          );
    },
    getUser: (callback) => {
        pool.query(
            `select id,firstname,lastname,contact,email,password,isadmin from registration`,
            [],
            (error,results,fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getUserbyUserId : (id, callback) => {
        pool.query(
            `select id,firstname,lastname,contact,email,password,isadmin from registration where id = ?`,
            [id],
            (errors,results,fields) => {
                if(errors){
                    return callback(errors);
                }
                return callback(null,results[0]);
            }
        );
    },
    updateUser : (data,callback) => {
        pool.query(
            `update registration set firstname = ?,lastname =? ,contact =? ,email= ?,password = ?,isadmin =? where id = ?`,
            [
                data.firstname,
                data.lastname,
                data.contact,
                data.email,
                data.password,
                data.isadmin,
                data.id
            ],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results);
            }
        ); 
    },
    deleteUser : (data,callback) => {
        pool.query(
            'delete from registration where id = ?',
            [data.id],
            (error,results,fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        );
    }
};