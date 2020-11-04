const db = require('../config/db')
/**
 *更新文章
 */
module.exports = (req, res, next) => {
    let data = req.body
	if (data.arrt === 'is_open') {
		db.query(
			'UPDATE `blog`.`post` SET `is_open`=? WHERE `id`=?',
            function (error, rows) {
				if (error || rows['changedRows'] == 0) {
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
			[data.value ? 1 : 0, data.id]
		)
	} else if (data.arrt === 'choiceness') {
		db.query(
			'UPDATE `post` SET `choiceness`=?  WHERE `id`=?',
            function (error, rows) {
				if (error || rows['changedRows'] == 0) {
					res.json({
						code: -1,
						status: 'error',
						info: '更新失败',
					})
				} else {
					res.json({
						code: 200,
						status: 'success',
						info: '更新成功',
					})
				}
			},
			[data.value?1:0, data.id]
		)
	} else {
		res.json({
			code: -1,
			status: 'error',
			info: '数据错误',
		})
	}
}
