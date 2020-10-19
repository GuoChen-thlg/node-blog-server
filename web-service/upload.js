const path = require('path')
const formidable = require('formidable')
const fs = require('fs')
function save(req, res, filenName) {
	const form = new formidable.IncomingForm()
	form.keepExtensions = true
	form.uploadDir = path.join(__dirname, '../public/image/')
	form.parse(req, function (error, fields, files) {
		if (error) return next(error)
		let oldPath = files.file.path
		let imgName = files.file.name
		let newName=imgName.replace(/[^.]+/,filenName)
		let newPath = path.join(path.dirname(oldPath), newName)
		fs.rename(oldPath, newPath, err => {
			if (err) next(err)
            res.json({
                code: 200,
                mag: '成功',
                name:'author'
            })
		})
	})
}

function siteHeadImg(req, res, next) {
	save(req, res, 'siteHeadImg')
}
function siteBackImg(req, res, next) {
    console.log('上传成功了');
	save(req, res, 'siteBackImg')
}
function authorHeadImg(req, res, next) {
	save(req, res, 'authorHeadImg')
}

module.exports = { siteHeadImg, siteBackImg, authorHeadImg }
