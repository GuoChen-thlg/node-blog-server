const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports  = (req, res, next) => {
	let tag = req.query.tag || ''
	db.query(
		'SELECT  `path`,`title` FROM `post` WHERE FIND_IN_SET(?,`classify`)',
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
					code: -1,
					status: 'error',
					info: '添加失败',
				})
			}
		},
		[tag]
	)
}
// module.exports = queryCategory
