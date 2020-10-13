const mysql = require('mysql')
const pool = mysql.createPool({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: 'root',
	database: 'blog',
	multipleStatements: true,
})


function query(sql, callback, add_value = false) {
	pool.getConnection(function (err, connection) {
		if (!err) {
			connection.query(sql, add_value, function (err, rows) {
				callback(err, rows)
				connection.release()
			})
		} else {
			callback(err, [])
		}
	})
}


exports.query = query

