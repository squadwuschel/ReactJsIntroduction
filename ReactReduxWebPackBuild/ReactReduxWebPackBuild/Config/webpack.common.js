var webpack = require('webpack');
var helpers = require('./helpers');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//Quellen:
//https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.7gpzskxfq


/*
 * Webpack Constants
 */
var HMR = helpers.hasProcessFlag('hot');
var METADATA = {
    baseUrl: "/",
    applicationname: "WebLogViewer",
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
    var isProd = options.env === 'production';

    //die BaseUrl wird benötigt um diese in der index.html entsprechend zu setzen.
    //Im Produktionmodus muss hier der Name der Anwendung eingetragen werden, da diese bei
    //uns immer als SubAnwendung angelegt werden.
    if (isProd) {
        METADATA.baseUrl = "/" + METADATA.applicationname + "/";
    }

    return {
        entry: {
            'vendors': './App/AppShared/Build/vendors.tsx',
            'appOne': './App/appOne.tsx',
            'appTwo': './App/appTwo.tsx',
        },

        resolve: {
            /*
            * An array of extensions that should be used to resolve modules.
            * Wenn die Endung beim Import in den TypeScript dateien nicht angegeben wird,
            * dann wird versucht die fehlende Endung mit den Endungen hier "wiederherzustellen"
            *
            * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
            */
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        },

        plugins: [
            /*
                   * Plugin: CommonsChunkPlugin
                   * Description: Shares common code between the pages.
                   * It identifies common modules and put them into a commons chunk.
                   *
                   * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
                   * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
                   */
                new CommonsChunkPlugin({
                    name: ['vendors'].reverse()
                }),

                /*
                * Plugin: HtmlWebpackPlugin
                * Description: Simplifies creation of HTML files to serve your webpack bundles.
                * This is especially useful for webpack bundles that include a hash in the filename
                * which changes every compilation.
                * 
                * Setzt außerdem den BaseUrl in der Anwendung über ein einfaches "Template":
                *  <base href="<%= htmlWebpackPlugin.options.metadata.baseUrl %>">
                *
                * See: https://github.com/ampedandwired/html-webpack-plugin
                */
                new HtmlWebpackPlugin({
                    template: 'App/index.html',
                    baseUrl: METADATA.baseUrl,
                    chunksSortMode: 'dependency',
                    metadata: METADATA,
                }),

                /*
                 * Plugin kümmert sich darum, das die Styles in extra Dateien ausgelagert werden, dafür muss
                 * auch im Loader darauf zugegriffen werden.
                 * 
                 * See: https://github.com/webpack/extract-text-webpack-plugin#api
                 */
                 new ExtractTextPlugin({
                     filename: "[name].css",
                     //  disable: false,
                     //  allChunks: true
                 }),

                 /**
                  * Einfache PluginFunktion, die in der Console ausgibt, wann der letzte Compile Vorgang ausgeführt wurde.
                  */
                 function () {
                     this.plugin('watch-run',
                         function (watching, callback) {
                             console.log('Compiletime at => ' + new Date());
                             callback();
                         });
                 }
        ],

        /*
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         */
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
}