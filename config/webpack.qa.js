const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js'); 

const DefinePlugin = require('webpack/lib/DefinePlugin');

const VERSION = require('../package.json').version;

const ENV = process.env.ENV = process.env.NODE_ENV = 'QA';
const API_URL = 'https://dpdev.billing.com/';
const METADATA = webpackMerge(commonConfig.metadata,{
     ENV: ENV,
     API_URL:API_URL,
     VERSION:VERSION
});

module.exports = webpackMerge(commonConfig,{
    metadata:METADATA,
    plugins:[
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'API_URL': JSON.stringify(METADATA.API_URL),
                'VERSION': JSON.stringify(METADATA.VERSION)
            }
        })
    ]
})