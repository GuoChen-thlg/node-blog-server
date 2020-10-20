// DELETE FROM `blog`.`post` WHERE `id` = '6'
const db = require('../config/db')
/**
 *添加文章
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports = (req, res, next) => {
	let data = req.body
	db.query(
		'DELETE FROM `blog`.`post` WHERE `id` = ?',
		function (error, rows) {
			if (error) {
				res.json({
					code: -1,
					status: 'error',
					info: '添加失败',
					sqlMessage: error.sqlMessage,
				})
			} else {
				res.json({
					code: 200,
					status: 'success',
					info: '添加成功',
					rows,
				})
			}
		},
		[data.id]
	)
}
