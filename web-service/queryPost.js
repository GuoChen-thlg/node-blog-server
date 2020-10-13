const db = require('../config/db')
/**
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const Post = (req, res, next) => {
	let poist_id = req.query.id
	db.query(
		'(SELECT `id`,`title`, `firstDate`, `lastDate`, `classify`, `label`, `word_count`, `duration`, `path`, `digest`,`main_part`,`is_open`,`choiceness` FROM `post` WHERE `id`<? ORDER BY `id` DESC LIMIT 1)UNION(SELECT `id`,`title`, `firstDate`, `lastDate`, `classify`, `label`, `word_count`, `duration`, `path`, `digest`, `main_part`,`is_open`,`choiceness` FROM `post` WHERE `id`>=? ORDER BY `id` ASC LIMIT 2);SELECT `author`,`domain_name`,`license`,`license_url`  FROM `site`;',
		function (error, rows) {
			if (error) {
				console.error('queryPost:', error)
				res.json({
					code: 0,
					status: 'error',
					info: '获取失败',
				})
			} else {
				let lastPost = {},
					Post = {},
					nextPost = {}
				if (rows[0] && rows[0].length > 0) {
					rows[0].forEach(post => {
						if (post.id < poist_id) {
							lastPost = { ...post }
						} else if (post.id > poist_id) {
							nextPost = { ...post }
						} else {
							Post = { ...post }
						}
					})
					const data = {
						code: 200,
						status: 'success',
						info: '获取成功',
						data: {
							post: {
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
										path: rows[1][0]['domain_name'] + Post.path + '/#comments',
									},
								},
								path: Post.path,
								digest: Post.digest,
								brother: {
									lastPost: lastPost.title
										? {
												title: lastPost.title,
												path: lastPost.path,
										  }
										: null,
									nextPost: nextPost.title
										? {
												title: nextPost.title,
												path: nextPost.path,
										  }
										: null,
								},
							},
						},
						copyright: {
							author: rows[1][0]['author'],
							posturl: rows[1][0]['domain_name'] + Post.path,
							license: {
								name: rows[1][0]['license'],
								url: rows[1][0]['license_url'],
							},
						},
					}
					Post.classify != '' &&
						Post.classify.split(',').forEach(val => {
							data.data.post.meta.classify.value.push({
								path: `/categories/${val}`,
								value: val,
							})
						})
					Post.label != '' &&
						Post.label.split(',').forEach(val => {
							data.data.post.meta.label.value.push({
								path: `/tags/${val}`,
								value: val,
							})
						})
					res.json(data)
				} else {
					res.json({
						code: 0,
						status: 'error',
						info: '暂无数据',
					})
				}
			}
		},
		[poist_id, poist_id]
	)
}

module.exports = Post
