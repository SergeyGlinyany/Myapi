const Pool = require('pg').Pool
const pool = new Pool({
  user: 'sergeyglinyany',
  host: 'localhost',
  database: 'demo',
  password: '111',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM bookings.aircrafts_data', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getAirports = (request, response) => {
    pool.query('SELECT * FROM bookings.airports_data', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    //const code = parseInt(request.params.code)
    const { code }  = request.body
  
    pool.query(
        'SELECT * FROM bookings.aircrafts_data WHERE aircraft_code = $1',
     [code], 
     (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    getAirports,
    //createUser,
    //updateUser,
    //deleteUser,
  }