const PORT = process.env.PORT || 443
const HOST = process.env.HOST || '0.0.0.0'

const cors_proxy = require('cors-anywhere')

cors_proxy.createServer({
    originWhitelist: ['https://bearheadstudio.ru'],
    requireHeader: ['origin'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, HOST, () => {
    console.log('proxy running...')
})