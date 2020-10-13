const db = require('../config/db')
/**
 *添加文章
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const addPost = (req, res, next) => {
	let post = req.body
	let date = new Date()
	db.query(
		'INSERT INTO `blog`.`post` (`title`,`is_open`,`choiceness`, `firstDate`, `lastDate`, `classify`, `label`, `word_count`, `duration`, `path`, `digest`, `main_part`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
		function (error, rows) {
			if (error) {
				res.json({
					code: 0,
					status: 'error',
					info: '添加失败',
					rows,
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
		[
			post.title,
			true,
			false,
			date.format('yyyy-MM-dd hh:mm:ss'),
			date.format('yyyy-MM-dd hh:mm:ss'),
			post.category.join(','),
			post.tags.join(','),
			post.value.length,
			Math.round(post.value.length / 300),
			encodeURI('/post/' + post.title),
			post.value.substr(0, 5) + '...',
			post.value,
		]
	)
}

module.exports = addPost
