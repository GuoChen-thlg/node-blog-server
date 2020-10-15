const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const queryPostList = (req, res, next) => {
	// req.query
	let limit = (req.query.limit && req.query.limit > 0) || 10
	let Pageindex = (req.query.Pageindex && req.query.Pageindex > 0) || 1
	// total
	db.query(
		'SELECT * FROM `post` LIMIT ? OFFSET ?;SELECT COUNT(*) FROM `post`;',
		function (error, rows) {
			if (!error) {
				let total = rows[1][0]['COUNT(*)']
				let postList = []
				rows[0].forEach(Post => {
					let basicsPost = {
						id: Post.id,
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
					}
					Post.classify != '' &&
						Post.classify.split(',').forEach(val => {
							basicsPost.meta.classify.value.push({
								path: `/categories/${val}`,
								value: val,
							})
						})
					Post.label != '' &&
						Post.label.split(',').forEach(val => {
							basicsPost.meta.label.value.push({
								path: `/tags/${val}`,
								value: val,
							})
						})
					postList.push(basicsPost)
				})

				res.json({
					code: 200,
					status: 'success',
					info: '查询成功',
					data: {
						postList,
						presentPage: Pageindex,
						overallPage: Math.ceil(total / limit),
					},
				})
			} else {
				res.json({
					code: 0,
					status: 'error',
					info: '查询失败',
					error,
				})
			}
		},
		[limit, (Pageindex - 1) * limit]
	)
}
module.exports = queryPostList
