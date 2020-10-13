const db = require('../config/db')
/**
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const siteInit = (req, res, next) => {
	let post = req.body
	let date = new Date()
	console.log(req.cookies['_user_unique_id'])
	db.query('SELECT * FROM `site`', function (error, rows) {
		if (error) {
			res.send({
				code: 0,
				status: 'error',
				info: '查询失败',
			})
		} else {
			let data = rows[0]
			res.send({
				code: 0,
				status: 'success',
				info: '查询成功',
				data: {
					data,
				},
			})
		}
	})
}
// "author": "天火流光",
// "domain_name": "http://localhost:3000/#",
// "license": " CC BY-NC-SA 3.0",
// "license_url": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
// "head_back_color": "#fafafa",
// "head_active_back_color": "#fafafa",
// "head_back_img_isShow": 1,
// "head_back_img": "",
// "head_color": "#555",
// "head_active_color": "#555",
// "sidebar_back_color": "#ffffff",
// "sidebar_active_back_color": "",
// "sidebar_main_color": "#303133",
// "sidebar_active_main_color": "#409EFF",
// "sidebar_minor_color": "",
// "sidebar_active_minor_color": "",
// "L2Dwidget_isRender": 0,
// "L2Dwidget_modelName": "koharu",
// "L2Dwidget_tagMode": 0,
// "L2Dwidget_debug": 0,
// "L2Dwidget_model_scale": 1,
// "L2Dwidget_display_superSample": 2,
// "L2Dwidget_display_position": "right",
// "L2Dwidget_display_vWidth": 200,
// "L2Dwidget_display_vHeight": 300,
// "L2Dwidget_display_hOffset": -20,
// "L2Dwidget_display_vOffset": -40,
// "L2Dwidget_react_opacityDefault": 1,
// "L2Dwidget_react_opacityOnHover": 0.5,
// "L2Dwidget_dev_border": 0,
// "L2Dwidget_mobile_show": 1,
// "L2Dwidget_mobile_scale": 0.5,
// "L2Dwidget_mobile_motion": 1,
// "L2Dwidget_log": 1,
// "L2Dwidget_dialog_enable": 0,
// "L2Dwidget_dialog_hitokoto": 0,
// "site_back_color": "#eeeeee",
// "site_isShow": 0,
// "site_back_img": "",
// "canvas_nest_isShow": 0,
// "canvas_nest_color": "0,0,255",
// "canvas_nest_opacity": 0.7,
// "canvas_nest_zIndex": -2,
// "canvas_nest_count": 99
module.exports = siteInit
