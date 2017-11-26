import $ from 'jquery';

var storage = window.localStorage,
	queue = [],
	pending = false;

var TokenStore = {
	name: 'X-AUTH-TOKEN',
	refreshUrl: '/oauth/token/refresh',
	init: function (config) {
		TokenStore.name = config.name;
		TokenStore.refreshUrl = config.refreshUrl;
	},
	get: function (cb) {
		cb = cb || function () {};
		var token = storage.getItem(TokenStore.name);
		if (pending) {
			queue.push(cb);
		} else {
			if (token) {
				var tokenValue = token;
				token = JSON.parse(token);

				if (token.expireTime <= Date.now()) {
					pending = true;
					queue.push(cb);
					window.orginalAjax({
						url: TokenStore.refreshUrl,
						method: 'post',
						headers: {
							'X-AUTH-TOKEN': tokenValue
						},
						data: JSON.stringify(token),
						contentType: 'application/json',
						data: tokenValue,
						success: function (data) {
							if (data.access_token) {
								token = data;
								TokenStore.set(token);
							} else {
								TokenStore.remove();
								token = undefined;
							}
						},
						complete: function () {
							pending = false;
							TokenStore._execute(token);
						}
					});
				} else {
					cb(token);
				}
			} else {
				cb(token);
			}
		}
		return token;
	},

	_execute: function (token) {


		while (queue.length > 0) {
			queue.pop()(token);
		}


	},

	set: function (token) {


		if (token === undefined || token === null) {
			this.remove();
		} else {
			if (typeof token !== 'string') {
				token = JSON.stringify(token);

			}

			try {
				storage.setItem(TokenStore.name, token);
			} catch (err) {
				storage.clear();
				storage.setItem(TokenStore.name, token);
			}
		}

	},
	remove: function () {
		storage.removeItem(TokenStore.name);
	}

};

export default TokenStore;
