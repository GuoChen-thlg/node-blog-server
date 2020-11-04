const db = require('../config/db')
/**
搜索
 */
module.exports = (req, res, next) => {
    let data = req.body
	db.query(
		"SELECT * FROM `post` WHERE `title` LIKE ? OR `main_part` LIKE ?",
		function (error, rows) {
			if (!error) {
				res.json({
					code: 200,
					status: 'success',
                    info: '获取成功',
                    data:[...rows]
				})
            } else {
				res.json({
					code: -1,
					status: 'error',
					info: '获取失败',
				})
			}
		},
		[`%${data.search_word}%`, `%${data.search_word}%`]
	)
}

// module.exports = addPost
