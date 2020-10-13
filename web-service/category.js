const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const queryCategory = (req, res, next) => {
	let category = req.query.category || ''
	db.query(
		'SELECT  `path`,`title` FROM `post` WHERE FIND_IN_SET(?,`label`)',
		function (error, rows) {
			if (!error) {
				res.json({
					code: 200,
					status: 'success',
					info: '获取成功',
					data: {
						posts: rows,
					},
				})
			} else {
				res.json({
					code: 0,
				})
			}
		},
		[category]
	)
}
module.exports = queryCategory
