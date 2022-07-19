const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

const cors_proxy = require('cors-anywhere')

cors_proxy.createServer({
    originWhitelist: ['https://bearheadstudio1.ru'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, HOST, () => {
    console.log('proxy running...')
})