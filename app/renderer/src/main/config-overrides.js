const { override } = require('customize-cra')
const fs = require('fs')

function addRendererTarget(config) {
    config.target = 'electron-renderer'
    
    return config
}

module.exports = override(addRendererTarget)