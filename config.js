var config = {
    development: {
        port: 7804,
        domain: 'http://192.168.0.145:7804',
        apiBase: 'http://192.168.0.222:3333',
        oauth: {
			serverClientId: 'TxxGjYZCAUbQgxipKzWZtjvYugGGoQdVIYSUSvAhqKWPlWNyqdZSOOIMVcUJQLFw',
			serverClientSecret: 'iFAeXVElWvIqHFJFrAmpeFpizMTLJiYx',
			serverAccessTokenUrl: 'http://192.168.0.133:3333/oauth/token'
		},
    },
    production: {
        port: 7802,
        domain: 'xinfu.fongwell.com',
        apiBase: 'http://erp.api.fongwell.com',
        oauth: {
			serverClientId: 'TxxGjYZCAUbQgxipKzWZtjvYugGGoQdVIYSUSvAhqKWPlWNyqdZSOOIMVcUJQLFw',
			serverClientSecret: 'iFAeXVElWvIqHFJFrAmpeFpizMTLJiYx',
			serverAccessTokenUrl: 'http://erp.api.fongwell.com/oauth/token'
		},
    },
    prodtest: {
        port: 5801,
        domain: 'http://localhost:5801',
    },
};
var envbuild = 'development';
if (process.env.config_env) {
    envbuild = process.env.config_env;
} else {
    if (process.argv.length > 2) {
        for (var i in config) {
            if (process.argv.indexOf(i) !== -1) {
                envbuild = i;
                break;
            }
        }
    }
}

var toUse = config[envbuild];
console.log('配置环境:' + envbuild);
module.exports = toUse;