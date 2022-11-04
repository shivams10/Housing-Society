const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into users(first_name,last_name,contact,email,password,is_admin)
            values(?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.contact,
        data.email,
        data.password,
        data.is_admin,
      ],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUser: (callback) => {
    pool.query(
      `select id,first_name,last_name,contact,email,is_admin from users`,
      [],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUserbyUserId: (id, callback) => {
    pool.query(
      `select id,first_name,last_name,contact,email,password,is_admin from users where id = ?`,
      [id],
      (errors, results) => {
        if (errors) {
          return callback(errors);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateUser: (data, callback) => {
    pool.query(
      `update users set first_name = ?,last_name =? ,contact =? ,email= ?,password = ?,is_admin =? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.contact,
        data.email,
        data.password,
        data.is_admin,
        data.id,
      ],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteUser: (data, callback) => {
    pool.query(
      "delete from users where id = ?",
      [data.id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  // Login
  getUserbyUserEmail: (email, callback) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  // Resources
  createResources: (data, callback) => {
    pool.query(
      `insert into resources(resource_name,status)
            values(?,?)`,
      [data.resource_name, data.status],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getResources: (callback) => {
    pool.query(
      `select id,resource_name,status from resources`,
      [],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getResourcesById: (id, callback) => {
    pool.query(
      `select id,resource_name,status from resources where id = ?`,
      [id],
      (errors, results) => {
        if (errors) {
          return callback(errors);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateResources: (data, callback) => {
    pool.query(
      `update resources set resource_name = ?,status =?  where id = ?`,
      [data.resource_name, data.status, data.id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  // Resource occupancy
  createOccupancy: (data, callback) => {
    pool.query(
      `
            insert into occupancies(occupancy_date,resource_id,user_id,is_available)
                values(?,?,?,false)
            `,
      [data.occupancy_date, data.resource_d, data.user_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getOcuupancy: (callback) => {
    pool.query(`select * from occupancies`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  deleteOccupancy: (data, callback) => {
    pool.query(
      `delete from occupancies where id = ?`,
      [data.id],
      (error, results) => {
        if (error) return callback(error);
        return callback(null, results);
      }
    );
  },
  updateOccupancy: (data, callback) => {
    pool.query(
      `update occupancies set resource_id=?, user_id=?,occupancy_date=? where id =?`[
        (data.resource_id, data.user_id, data.occupancy_date, data.id)
      ],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
};
