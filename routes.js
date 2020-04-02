const routes = require('next-routes')


module.exports = routes()
.add('index')
.add('character', '/:slug-:id', 'character')
