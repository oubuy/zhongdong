var path = require('path'),
    webpack = require('webpack'),
    config = require('./config'),//端口
    srcDir = path.join(process.cwd(), 'client'), // process.cwd()：返回运行当前脚本的工作目录的路径
    imagePath = path.join(srcDir, 'img'),
    cssPath = path.join(srcDir, 'css'),
    jsPath = path.join(srcDir, 'js'),
    viewsPath = path.join(srcDir, 'views'),
    nodeModulesPath = path.join(__dirname, 'node_modules'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    publicPath = config.domain + '/',
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    pxtorem = require('postcss-pxtorem'),
    bundleConfig = require("./build/bundle-config.json"),
    autoprefixer = require('autoprefixer');

module.exports = {
    cache: true,
    entry: {
        index: [
            'babel-polyfill',//为了支持es6语法
            'react-hot-loader/patch', // 开启react代码的模块热替换（HMR）
            'webpack-dev-server/client?http://0.0.0.0:' + config.port, // 为webpack-dev-server的环境打包好运行代码,然后连接到指定服务器域名与端口
            'webpack/hot/only-dev-server', //然后连接到指定服务器域名与端口, only- 意味着只有成功更新运行代码才会执行热替换（HMR）
            path.join(__dirname, "client/views/index.jsx")
        ],
    },
    output: {
        publicPath: '/',//输出解析文件的目录
        path: path.join(__dirname, "build/static/"), //文件输出目录
        filename: "core/[name].js", //根据入口文件输出的对应多个文件名
        chunkFilename: "core/[name].js"
    },
    resolve: {//用来影响webpack模块的解析规则
        extensions: ['.js', '.jsx'],
        alias: { //配置别名，在项目中可缩减引用路径
            'img': path.join(srcDir, 'img'),
            'css': path.join(srcDir, 'css'),
            'js': path.join(srcDir, 'js'),
            'views': path.join(srcDir, 'views')
        }
    },
    devServer: {
        historyApiFallback: true,//为了让所有的路径都执行index.html
        contentBase: 'build/static/',
        hot: true,
        inline: true,
        port: config.port,
        disableHostCheck: true,//配置可以访问host
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.(eot|woff|woff2|ttf|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                exclude: [nodeModulesPath],
                include: [srcDir],
                loader: 'url-loader?limit=8192&name=img/[name].[ext]',
            }, {
                test: /\.(scss|sass|css)$/,
                use: ["style-loader", {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [autoprefixer]
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            imagePath: imagePath,
                            includePaths: [cssPath]
                        }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [nodeModulesPath],
                include: [srcDir],
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 开启全局的模块热替换（HMR）
        new webpack.DllReferencePlugin({ // 加快webpack打包速度
            context: __dirname,
            manifest: require('./build/static/dll/vendor-manifest.json')
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, './client/js/lib'),
            to: path.resolve(__dirname, './build/static/lib')
        }]),
        
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client/html/index.html'),
            bundleName: bundleConfig.vendor.js,
            inject: true
        })
    ]
};