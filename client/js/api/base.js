import $ from 'jquery';
import TokenStore from 'js/core/tokenStore';

let orginalAjax = $.ajax;
window.orginalAjax = orginalAjax;
window.expire = false;
class ApiBase {
	constructor() {}

	setUp(pattern, root) {
		this.pattern = pattern;
		this.root = root;
		window.apiBase = root;
		let self = this;
		// $.ajaxSetup({
		// 	headers: {
		// 		Headers: "dailyWeb"
		// 	}
		// });

		$.ajax = function (url, options) {
			// TokenStore.get((token) => {

			// 	if (!token) {
			// 		return;
			// 	}
			var patternMatched = false;
			if (typeof url === "object") {
				options = url;
				url = undefined;
				if (self.pattern.test(options.url)) {
					patternMatched = true;
					options.url = self.root + options.url;
					// if (options.url.indexOf('?') > 0) {
					// 	options.url = options.url + '&access_token=' + token.access_token;
					// } else {
					// 	options.url = options.url + '?access_token=' + token.access_token;
					// }
				}
			} else {
				if (self.pattern.test(url)) {
					patternMatched = true;
					url = self.root + url;
				}
			}
			// if (patternMatched) {
			// 	var method = options.method || options.type;
			// 	// if (!method || method.toLowerCase() === 'get') {
			// 	// options.dataType = 'jsonp';
			// 	// options.jsonp = 'callback';
			// 	// }
			// }

			if (options.success) {
				var wrap = (function (cb) {
					return function (data) {
						try {
							data = JSON.parse(data)
							if (data.code === 1002 && window.expire === false) {
								window.expire = true;
								window.openNativeView({
									"type": 7
								})
								return;
							}
							cb.call(this, data);
						} catch (error) {}
					};
				})(options.success);
				options.success = wrap;
			}
			return orginalAjax(url, options);
			// });
		}
	}
}

let apiBase = new ApiBase();
export {
	apiBase
};