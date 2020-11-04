const db = require('../config/db')
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports  = (req, res, next) => {
	let config = req.body
	db.query(
		'UPDATE `site` SET `author` =?, `domain_name` =?, `license` =?, `license_url` =?, `head_back_color` =?, `head_active_back_color` =?, `head_back_img_isShow` =?, `head_back_img` =?, `head_color` =?, `head_active_color` =?, `sidebar_back_color` =?, `sidebar_active_back_color` =?, `sidebar_main_color` =?, `sidebar_active_main_color` =?, `sidebar_minor_color` =?, `sidebar_active_minor_color` =?, `L2Dwidget_isRender` =?, `L2Dwidget_modelName` =?, `L2Dwidget_tagMode`=?, `L2Dwidget_debug` =?, `L2Dwidget_model_scale` =?, `L2Dwidget_display_superSample` =?, `L2Dwidget_display_position` =?, `L2Dwidget_display_vWidth` =?, `L2Dwidget_display_vHeight` =?, `L2Dwidget_display_hOffset` =?, `L2Dwidget_display_vOffset` =?, `L2Dwidget_react_opacityDefault` =?, `L2Dwidget_react_opacityOnHover` =?, `L2Dwidget_dev_border` =?, `L2Dwidget_mobile_show` =?, `L2Dwidget_mobile_scale` =?, `L2Dwidget_mobile_motion` =?, `L2Dwidget_log` =?, `L2Dwidget_dialog_enable` =?, `L2Dwidget_dialog_hitokoto` =?, `site_back_color` =?, `site_isShow` =?, `site_back_img` =?, `canvas_nest_isShow` =?, `canvas_nest_color` =?, `canvas_nest_opacity` =?, `canvas_nest_zIndex` =?, `canvas_nest_count` =?, `links` =?, `reward_qr` =?, `blogroll` =?, `author_image` =?, `author_subtitle` =?, `site_description`=?,`is_search`=?',
		function (error, rows) {
			if (!error&&rows['changedRows']>0) {
				res.json({
					code: 200,
					status: 'success',
					info: '修改成功',
				})
			} else {
				res.json({
					code: -1,
					status: 'error',
					info: '修改失败',
				})
			}
		},
		[
			config.author.name,
			config.site.previewURL,
			config.license.title,
			config.license.url,
			config.head.back_color,
			config.head.active_back_color,
			config.head.isShow,
			config.head.back_img,
			config.head.color,
			config.head.active_color,
			config.sidebar.back_color,
			config.sidebar.active_back_color,
			config.sidebar.main_color,
			config.sidebar.active_main_color,
			config.sidebar.minor_color,
			config.sidebar.active_minor_color,
			config.L2Dwidget.isRender,
			config.L2Dwidget.modelName,
			config.L2Dwidget.tagMode,
			config.L2Dwidget.debug,
			config.L2Dwidget.model.scale,
			config.L2Dwidget.display.superSample,
			config.L2Dwidget.display.position,
			config.L2Dwidget.display.width,
			config.L2Dwidget.display.height,
			config.L2Dwidget.display.hOffset,
			config.L2Dwidget.display.vOffset,
			config.L2Dwidget.react.opacityDefault,
			config.L2Dwidget.react.opacityOnHover,
			config.L2Dwidget.dev.border,
			config.L2Dwidget.mobile.show,
			config.L2Dwidget.mobile.scale,
			config.L2Dwidget.mobile.motion,
			config.L2Dwidget.log,
			config.L2Dwidget.dialog.enable,
			config.L2Dwidget.dialog.hitokoto,
			config.site.back_color,
			config.site.isShow,
			config.site.back_img,
			config.CanvasNest.isShow,
			config.CanvasNest.color2,
			config.CanvasNest.opacity,
			config.CanvasNest.zIndex,
			config.CanvasNest.count,
			JSON.stringify(config.links),
			JSON.stringify(config.rewardQR),
			JSON.stringify(config.blogrolllist),
			config.author.image,
			config.author.subtitle,
			config.author.description,
			config.isSearch
		]
	)
}

