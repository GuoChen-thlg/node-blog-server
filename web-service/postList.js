const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const queryPostList = (req, res, next) => {
	// req.query
	let limit = req.query.limit || 10
	let Pageindex = req.query.Pageindex || 1
	// total
	db.query(
		'SELECT * FROM `post` LIMIT 2 OFFSET 2',
		function (error, rows) {
			if (!error) {
				let postList = []
				rows.forEach(Post => {
					postList.push({
						title: Post.title,
						meta: {
							is_open: Post.is_open,
							choiceness: Post.choiceness,
							firstDate: {
								'icon-class': 'fa fa-calendar-o',
								label: '发表于',
								value: Post.firstDate,
							},
							lastDate: {
								'icon-class': '',
								label: '修改于',
								value: Post.lastDate,
							},
							classify: {
								'icon-class': 'fa fa-folder-o',
								label: '分类于',
								value: [],
							},
							label: {
								'icon-class': 'fa fa-tag',
								label: '标签',
								value: [],
							},
							'word-count': {
								'icon-class': 'fa fa-file-word-o',
								label: '字数统计:',
								value: Post.word_count,
							},
							duration: {
								'icon-class': 'fa fa-clock-o',
								label: '阅读时长 ≈',
								value: Post.duration,
							},
							heat: {
								'icon-class': 'fa fa-thermometer',
								label: '热度',
								value: '400',
							},
							comment: {
								'icon-class': 'fa fa-comment-o',
								label: '评论',
								value: '400',
								path: Post.path + '/#comments',
							},
						},
						path: Post.path,
						digest: Post.digest,
						
					})
				})

				res.json({
					code: 200,
					postList,
				})
			} else {
				console.log(error)
				res.json({
					error,
				})
			}
		}
		// [limit, (Pageindex - 1) * limit]
	)
}
module.exports = queryPostList
