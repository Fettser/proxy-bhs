const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '127.0.0.1'

const cors_proxy = require('cors-anywhere')

cors_proxy.createServer({
    originWhitelist: ['https://safe-stream-23201.herokuapp.com'],
    requireHeader: ['origin'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, HOST, () => {
    console.log('proxy running...')
})