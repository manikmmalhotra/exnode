const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO user(id, name, adress, email, phone) values(?, ?, ?, ?, ?);`,
                [
                    data.id,
                    data.name,
                    data.adress,
                    data.email,
                    data.phone
                ],
                (error, results, fields) => {
                    if (error) {
                       return callback(error)
                    }
                    console.log(data);
                    return callback(null, results)
                }
        );
    },
    getUsers: callback => {
        pool.query(
            `select * from user`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
      pool.query(
        `delete from user where id = ?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          console.log(data);
          return callBack(null, results[0]);
        }
      );
    }
};