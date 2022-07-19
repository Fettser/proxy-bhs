const PORT = process.env.PORT || 3000

const cors_proxy = require('cors-anywhere')

cors_proxy.createServer({
    originWhitelist: ['https://bearheadstudio.ru'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, () => {
    console.log('proxy running...')
})