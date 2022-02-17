const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
   mode: 'production',
   entry: './src/index.ts',
   target: "node",
   externals: [nodeExternals()],

   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'index.js',
   },
   resolve: {
       extensions: ['.ts', '.js'],
   },
   module: {
       rules: [
           {
               test: /\.tsx?/,
               use: 'ts-loader',
               exclude: /node_modules/
           }
       ]
   }
}
