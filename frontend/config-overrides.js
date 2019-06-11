const path = require('path')
const { addWebpackAlias } = require('customize-cra')

module.exports = function override(config, env) {
    config = addWebpackAlias({
        ['Components']: path.resolve(__dirname, 'src', 'components'),
        ['Containers']: path.resolve(__dirname, 'src', 'containers'),
        ['@src']: path.resolve(__dirname, 'src'),
    })(config)

    return config
}
