const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const queryCategoryList = (req, res, next) => {
	let limit = req.query.limit || 10
	let Pageindex = req.query.Pageindex || 1
	db.query('SELECT  `classify`,`path`,`title` FROM `post`', function (
		error,
		rows
	) {
		if (!error) {
			let old_classify = []
			let new_classify = []

			rows.forEach(post => {
				old_classify = [...old_classify, ...post.classify.split(',')]
			})

			new_classify = Array.from(new Set(old_classify))
			let categoryList = new_classify.map(category => ({
				path: '/categories/' + category,
				label: category,
				value: category,
				count: old_classify.filter(c => c == category).length,
			}))
			res.json({
				code: 200,
				status: 'success',
				info: '获取成功',
				data: {
					total: new_classify.length,
					maxpage: Math.ceil(new_classify.length / limit),
					categoryList:
						categoryList.length > limit
							? categoryList.slice((Pageindex - 1) * limit, limit * Pageindex)
							: categoryList,
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
module.exports = queryCategoryList
