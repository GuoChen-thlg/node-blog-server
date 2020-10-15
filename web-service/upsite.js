const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const siteInit = (req, res, next) => {
	let config = req.body
	console.log(config)
	res.json({
		code: 200,
		status: 'success',
		info: '更新成功',
		data: {},
	})
	// db.query(
	// 	'UPDATE `blog`.`site` SET `author`=?, `domain_name`=?, `license`=?, `license_url`=?, `head_back_color`=?, `head_active_back_color`=?, `head_back_img_isShow`=?, `head_back_img`=?, `head_color`=?, `head_active_color`=?, `sidebar_back_color`=?, `sidebar_active_back_color`=?, `sidebar_main_color`=?, `sidebar_active_main_color`=?, `sidebar_minor_color`=?, `sidebar_active_minor_color`=?, `L2Dwidget_isRender`=?, `L2Dwidget_modelName`=?, `L2Dwidget_tagMode`=?, `L2Dwidget_debug`=?, `L2Dwidget_model_scale`=?, `L2Dwidget_display_superSample`=?, `L2Dwidget_display_position`=?, `L2Dwidget_display_vWidth`=?, `L2Dwidget_display_vHeight`=?, `L2Dwidget_display_hOffset`=?, `L2Dwidget_display_vOffset`=?, `L2Dwidget_react_opacityDefault`=?, `L2Dwidget_react_opacityOnHover`=?, `L2Dwidget_dev_border`=?, `L2Dwidget_mobile_show`=?, `L2Dwidget_mobile_scale`=?, `L2Dwidget_mobile_motion`=?, `L2Dwidget_log`=?, `L2Dwidget_dialog_enable`=?, `L2Dwidget_dialog_hitokoto`=?, `site_back_color`=?, `site_isShow`=?, `site_back_img`=?, `canvas_nest_isShow`=?, `canvas_nest_color`=?, `canvas_nest_opacity`=?, `canvas_nest_zIndex`=?, `canvas_nest_count`=? WHERE `id`=1',
	// 	function (error, rows) {
	// 		if (!error) {
	// 			let data = rows[0]
	// 			res.json({
	// 				code: 200,
	// 				status: 'success',
	// 				info: '查询成功',
	// 				data: {},
	// 			})
	// 		} else {
	// 			res.json({
	// 				code: -1,
	// 				status: 'error',
	// 				info: '添加失败',
	// 			})
	// 		}
	// 	},
	let a=[
        config.head.back_color
    ]
	// )
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
