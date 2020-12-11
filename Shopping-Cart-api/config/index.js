const config = {
   port: process.env.PORT || 8001,
   clientUrl : (process.env.NODE_ENV === 'production') ? 'https://joyce.pwc.delivery' : 'http://localhost:3000',

}

module.exports = config;