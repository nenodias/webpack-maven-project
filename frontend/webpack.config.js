var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');

const PATHS = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', packageJSON.name, packageJSON.version)
};

module.exports = {
    entry: [
        './src/index.js'
    ],
    module:{
        loaders:[
            {
                exclude: '/node_modules/',
                loader: 'babel',
                query: {
                  presets: ['es2015', 'es2017'],
                  plugins: [
                    ['transform-runtime', {
                      helpers: false,
                      polyfill: false,
                      regenerator: true, }],
                    'transform-es2015-destructuring',
                    'transform-object-rest-spread',
                    'transform-async-to-generator',
                    ],
                 },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /node_modules/
            },
            {
                test: /\.png$/,
                use: { loader: 'url-loader', options: { limit: 100000 } },
            },
            {
                test: /\.jpg$/,
                use: [ 'file-loader' ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: PATHS.build,
        publicPath: '/assets/',
    },
    resolve:{ extensions: [ '','.js'] }
};