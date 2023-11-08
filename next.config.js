// const {mwaWebpack} = require("@lululemon/mwa-webpack")

// Babel Transpile! 
// const withTranspileModules = require('next-transpile-modules')(["@lululemon/ecom-pattern-library"])

const ntm = require('next-transpile-modules')(["@lululemon/ecom-pattern-library"])
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}
module.exports = ntm(nextConfig)

// module.exports = mwaWebpack({
//     additionalPlugins:[withTranspileModules], 
//     nextOnlyConfig:{},
//     federationConfig:{}
// }) 
 
