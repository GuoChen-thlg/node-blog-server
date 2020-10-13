const jwt = require('jsonwebtoken')
async function upUV(visitObj) {
	const await_fun = visitDate => {
		let diff_intraday_uv =
			visitDate.intraday_uv.length - visitDate.intraday_uv_len
		let diff_intraday_ip =
			visitDate.intraday_ip.length - visitDate.intraday_ip_len
		if (diff_intraday_uv != 0) {
			// 每日设备访问数
			console.log('设备访问一次')
		}
		if (diff_intraday_ip != 0) {
			// 每日ip访问数
			console.log('ip访问一次')
		}
	}
	await await_fun(visitObj)
}

module.exports = { upUV }
