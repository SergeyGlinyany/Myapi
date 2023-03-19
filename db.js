const Pool = require('pg').Pool
const pool = new Pool({
  user: 'sergeyglinyany',
  host: 'localhost',
  database: 'demo',
  password: '111',
  port: 5432,
})

const getAllRec = (request, response) => {
    pool.query('SELECT get_all_rec() as object;', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }



  const getRecById = (request, response) => {
    const id   = request.query.id;
  
    pool.query(
        'SELECT get_part_rec($1) as object;',
     [id],
     (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const postNewRec = (request, response) => {
    const {name, duration, price, profit, description, stock_type, rec_industry, rec }   = request.body;
  
    pool.query(
        'call postnewrec($1,$2,$3,$4,$5,$6,$7,$8);',
     [name, duration, price, profit, description, stock_type, rec_industry, rec],
     (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const deleteRec = (request, response) => {
    const id   = request.query.id;
  
    pool.query(
        'call deleterec($1);',
     [id],
     (error, results) => {
      if (error) {
        throw error
      }
      response.send({message: `Рекомендация с id = ${id} удалена успешно`});
    })
  }

  const updateRec = (request, response) => {
    const {name, duration, price, profit, description, stock_type, rec_industry, rec }   = request.body;
    const id   = request.query.id;
    pool.query(
        'call updaterec($1,$2,$3,$4,$5,$6,$7,$8, $9);',
     [id, name, duration, price, profit, description, stock_type, rec_industry, rec],
     (error, results) => {
      if (error) {
        throw error
      }
      response.send({message: `Рекомендация с id = ${id} обновлена успешно`});
    })
  }

  module.exports = {
    getAllRec,
    getRecById,
    postNewRec,
    deleteRec,
    updateRec,
  }