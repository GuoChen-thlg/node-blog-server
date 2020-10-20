const db = require('../config/db')
/**
 *更新文章
 */
const addPost = (req, res, next) => {
	let post = req.body
    let date = new Date()
	db.query(
		'UPDATE `post` SET `title`=?, `lastDate`=?, `classify`=?, `label`=?, `word_count`=?, `duration`=?, `path`=?, `digest`=?, `main_part`=? WHERE `id`=?',
        function (error, rows) {
			if (error&&rows['changedRows']!=0) {
				res.json({
					code: -1,
					status: 'error',
					info: '更新失败',
					sqlMessage: error.sqlMessage,
				})
			} else {
				res.json({
					code: 200,
					status: 'success',
					info: '更新成功',
				})
			}
		},
		[
			post.title,
			date.format('yyyy-MM-dd hh:mm:ss'),
			post.category.join(','),
			post.tags.join(','),
			post.value.length,
			Math.round(post.value.length / 300),
			encodeURI('/post/' + post.title),
			post.value.substr(0, 200) + '...',
            post.value,
            post.id
		]
	)
}

module.exports = addPost
