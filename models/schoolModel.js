import connection from "../db.js";

const SchoolModel = {
  addSchool: (schoolData, callback) => {
    const { name, address, latitude, longitude } = schoolData;
    const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, address, latitude, longitude], callback);
  },

  getAllSchools: (callback) => {
    const sql = 'SELECT * FROM schools';
    connection.query(sql, callback);
  },
};
export default SchoolModel;


