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
	db.query('SELECT * FROM `site`', function (error, rows) {
		if (!error) {
			let data = rows[0]
			res.json({
				code: 200,
				status: 'success',
				info: '查询成功',
				data: {
					head: {
						back_color: data.head_back_color,
						active_back_color: data.head_active_back_color,
						isShow: data.head_back_img_isShow,
						back_img: data.head_back_img,
						color: data.head_color,
						active_color: data.head_active_color,
					},
					sidebar: {
						back_color: data.sidebar_back_color,
						active_back_color: data.sidebar_active_back_color,
						main_color: data.sidebar_main_color,
						active_main_color: data.sidebar_active_main_color,
						minor_color: data.sidebar_minor_color,
						active_minor_color: data.sidebar_active_minor_color,
					},
					L2Dwidget: {
						isRender: data.L2Dwidget_isRender,
						modelName: data.L2Dwidget_modelName,
						pluginModelPath: '/live2d-widget-model-koharu/assets/', //模型文件相对与插件根目录路径 live2d-widget-model-nico/assets/
						tagMode: data.L2Dwidget_tagMode, //标签模式
						debug: data.L2Dwidget_debug, //调试, 是否在控制台输出日志
						model: {
							jsonPath:
								'/live2dw/live2d-widget-model-koharu/assets/koharu.model.json', //主文件路径 /live2dw/live2d-widget-model-nico/assets/nico.model.json
							scale: data.L2Dwidget_model_scale, //模型与canvas的缩放
						},
						display: {
							superSample: data.L2Dwidget_display_superSample, // 超采样等级
							position: data.L2Dwidget_display_position,
							width: data.L2Dwidget_display_vWidth,
							height: data.L2Dwidget_display_vHeight,
							hOffset: data.L2Dwidget_display_hOffset, //canvas水平偏移
							vOffset: data.L2Dwidget_display_vOffset, //canvas垂直偏移
						},
						react: {
							//透明度条件
							opacityDefault: data.L2Dwidget_react_opacityDefault, //默认透明度
							opacityOnHover: data.L2Dwidget_react_opacityOnHover, //鼠标移上透明度
						},
						dev: {
							border: data.L2Dwidget_dev_border, //在canvas周围显示边界
						},
						mobile: {
							show: data.L2Dwidget_mobile_show, //是否在移动设备上显示
							scale: data.L2Dwidget_mobile_scale, //移动设备上的缩放
							motion: data.L2Dwidget_mobile_motion, // 移动设备是否开启重力感应
						},
						log: data.L2Dwidget_log,
						dialog: {
							enable: data.L2Dwidget_dialog_enable, //显示人物对话框
							hitokoto: data.L2Dwidget_dialog_hitokoto, //使用一言API
						},
					},
					CanvasNest: {
						isShow: data.canvas_nest_isShow,
						color1: `rgb(${data.canvas_nest_color})`,
						color2: data.canvas_nest_color,
						opacity: data.canvas_nest_opacity,
						zIndex: data.canvas_nest_zIndex,
						count: data.canvas_nest_count,
					},
					site: {
						back_color: data.site_back_color,
						isShow: data.site_isShow,
						back_img: data.site_back_img,
						copyrightYear: '2020',
						detailDate: '03/20/2020 00:00:00',
					},
					author: {
						name: '天火流光',
						image: 'https://thlg.ml/images/tx.jpg',
						subtitle: '天火流光的小屋',
						description:
							'一个人静静坐在电脑面前写代码的感觉，那是什么感觉?那是武林高手闭关修炼的感觉。',
					},
					links: [],
					rewardQR: [],
					blogrolllist: [{
						icon: '',
						path: '',
						label:'1'
					},{
						icon: '',
						path: '',
						label:'2'
					},{
						icon: '',
						path: '',
						label:'3'
					}],
					statistics: {
						journal: 0,
						categories: 0,
						tags: 0,
					},
				},
			})
		} else {
			res.json({
				code: -1,
				status: 'error',
				info: '查询失败',
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
