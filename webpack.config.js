const fs      = require('fs');
const getConfig = require('hjs-webpack');
const webpack = require('webpack');

const path    = require('path');
const join    = path.join;
const resolve = path.resolve;

const root    = resolve(__dirname);
const src     = join(root, 'src/client');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist/client');
const isDev   = process.env.NODE_ENV === 'development';


const config = getConfig({
    in: join(src, 'app.js'),
    out: dest,
    output: {
        filename: 'main.js',
        cssFilename: 'main.css'
    },
    clearBeforeBuild: '!(images|favicon.png)',
    html: function (context) {
        return {
            'index.html': context.defaultTemplate({
                head: '<link rel="icon" href="favicon.png" />',
                title: 'Airlerts',
                publicPath: isDev ? 'http://localhost:3001/' : '',
                meta: {
                    'name': 'Airlerts',
                    'description': 'Airline fares'
                }
            })
        };
    },
    devServer: {
        port: 3001
    }
});


const cssModulesNames = '[path][name]__[local]__ [hash:base64:5]';
const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
    const found = loaders.filter(l => l && l.loader && l.loader.match(match));
    return found ? found[0] : null;
};

const cssloader = findLoader(config.module.loaders, matchCssLoaders);

const newloader = Object.assign({}, cssloader, {
    test: /\.module\.css$/,
    include: [src],
    loader: cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
});

config.module.loaders.push(newloader);
cssloader.test = new RegExp(`[^module]${cssloader.test.source}`);
cssloader.loader = newloader.loader;

config.module.loaders.push({
    test: /\.css$/,
    include: [modules],
    loader: 'style!css'
});

config.postcss = [].concat([
    require('precss')({}),
    require('autoprefixer')({}),
    require('cssnano')({})
]);


config.resolve.root = [src, modules];
config.resolve.alias = {
    'css': join(src, 'styles'),
    'components': join(src, 'components'),
    'styles': join(src, 'styles')
};


module.exports = config;
