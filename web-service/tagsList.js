const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const queryTagsList = (req, res, next) => {
	// req.query
	// limit
	// Pageindex
	// total
	let limit = req.query.limit || 10
	let Pageindex = req.query.Pageindex || 1
	db.query('SELECT  `label`,`path`,`title` FROM `post`', function (
		error,
		rows
	) {
		if (!error) {
			let old_tag = []
			let new_tag = []

			rows.forEach(post => {
				old_tag = [...old_tag, ...post.label.split(',')]
			})

			new_tag = Array.from(new Set(old_tag))
			let labelList = new_tag.map(label => ({
				path: '/tags/' + label,
				label: label,
				value: label,
				count: old_tag.filter(c => c == label).length,
			}))
			res.json({
				code: 200,
				status: 'success',
				info: '获取成功',
				data: {
					total: new_tag.length,
					maxpage: Math.ceil(new_tag.length / limit),
					tags:
						labelList.length > limit
							? labelList.slice((Pageindex - 1) * limit, limit * Pageindex)
							: labelList,
				},
			})
		} else {
			res.json({
				code: -1,
				status: 'error',
				info: '添加失败',
			})
		}
	})
}
module.exports = queryTagsList
