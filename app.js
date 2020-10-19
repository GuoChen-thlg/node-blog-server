require('./util/date') // 时间格式化
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser') // post 参数解析
const cookieParser = require('cookie-parser') // cookie 解析
const uuid = require('node-uuid') // 唯一id
const jwt = require('jsonwebtoken')
const { upUV } = require('./web-service/statistics/index')
const app = express()
const api = require('./web-service/index')
const site_visit = {
	intraday_uv_len: 0,
	intraday_ip_len: 0,
	intraday_uv: [],
	intraday_ip: [],
}
// 定时清空
setInterval(() => {
	if (new Date().format('hh:mm:ss') == '00:00:00') {
		site_visit.intraday_uv_len = 0
		site_visit.intraday_uv = []
		site_visit.intraday_ip_len = 0
		site_visit.intraday_ip = []
	}
}, 1000)

app.use(cookieParser())
//  post 参数解析
app.use(bodyParser.json())
// 静态文件
app.use(express.static(path.join(__dirname, './views/blog')))
app.use(express.static(path.join(__dirname, './views/back')))
app.use(express.static(path.join(__dirname, 'public')))
// 引擎
// app.set('views',path.join(__dirname , 'views') );
// app.engine('.html', require('ejs').__express);
// app.set('view engine', 'html');

// 路由
app.get('/', function (req, res) {
	let unique_same = req.cookies['_uuid_same']
	site_visit.intraday_ip_len = site_visit.intraday_ip.length
	let old_intraday_ip = [...site_visit.intraday_ip]
	old_intraday_ip.push(
		req.headers['x-real-ip'] ||
			req.headers['x-forwarded-for'] ||
			req.connection.remoteAddres ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress
	)
	site_visit.intraday_ip = Array.from(new Set([...old_intraday_ip]))

	if (!unique_same || unique_same == undefined || unique_same == '') {
		res.cookie(
			'_uuid_same',
			jwt.sign({ jti: uuid.v4() }, 'THLG_BLOG', { expiresIn: '1 days' }),
			{
				expires: new Date(new Date().setHours(24, 0, 0, 0)),
				httpOnly: true,
			}
		)
	} else {
		site_visit.intraday_uv_len = site_visit.intraday_uv.length
		let old_intraday_uv = [...site_visit.intraday_uv]
		old_intraday_uv.push(unique_same)
		site_visit.intraday_uv = Array.from(new Set([...old_intraday_uv]))
	}
	upUV(site_visit)
	// res.send({
	// 	...site_visit,
	// })
	res.sendFile(path.join(__dirname, '/views/blog/index.html'))
})
// app.get('/back', function (req, res) {
// 	res.sendFile(path.join(__dirname, '/views/back/index.html'))
// })

// 跨域设置
app.all('/api/*', function (req, res, next) {
	// 设置允许跨域的域名，*代表允许任意域名跨域
	res.header('Access-Control-Allow-Origin', '*')
	// 允许的header类型
	res.header('Access-Control-Allow-Headers', 'content-type')
	// 跨域允许的请求方式
	res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
	// res.header(
	// 	'ip',
	// 	req.headers['x-real-ip'] ||
	// 		req.headers['x-forwarded-for'] ||
	// 		req.connection.remoteAddres ||
	// 		req.socket.remoteAddress ||
	// 		req.connection.socket.remoteAddress
	// )
	next()
})
// api
app.use('/api', api)
app.use(bodyParser.json({limit : '50mb'})); 
const server = app.listen(3000, '0.0.0.0', function () {
	console.log('http://localhost:%d/', server.address().port)
})
