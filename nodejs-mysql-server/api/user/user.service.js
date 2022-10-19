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
    },

    // Login
    getUserbyUserEmail : (email,callback) =>{
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error,results,fields) => {
                if(error){
                    callback(error);
                }
                return callback(null,results[0]);
            }
        )
    },

    // Resources
    createResources: (data,callback) => {
        pool.query(
            `insert into resources(resourcename,status)
            values(?,?)`,
            [
                data.resourcename,
                data.status
            ],
            (error,results,fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null,results);
            }
          );
    },
    getResources: (callback) => {
        pool.query(
            `select id,resourcename,status from resources`,
            [],
            (error,results,fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getResourcesById: (id, callback) => {
        pool.query(
            `select id,resourcename,status from resources where id = ?`,
            [id],
            (errors,results,fields) => {
                if(errors){
                    return callback(errors);
                }
                return callback(null,results[0]);
            }
        );
    },
    updateResources:(data,callback) => {
        pool.query(
            `update resources set resourcename = ?,status =?  where id = ?`,
            [
                data.firstname,
                data.status,
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

    // Resource occupancy
    createOccupancy:(data,callback) => {
        pool.query(
            `
            insert into occupancy(occupancyDate,resourceId,userId,isAvailable)
                values(?,?,?,false)
            `,
            [
                data.occupancyDate,
                data.resourceId,
                data.userId
            ],
            (error,results,fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null,results);
            }
        );
    },
    getOcuupancy: (callback) =>{
        pool.query(
            `select * from occupancy`,
            [],
            (error,results,fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    deleteOccupancy : (data,callback) => {
        pool.query(
            `delete from occupancy where id = ?`,
            [data.id],
            (error,results,fields) => {
                if(error) 
                    return callback(error);
                return callback(null,results);
            }
        );
    }
 };

//  200 201 202 204
// 400 401 403 409 404
// 500