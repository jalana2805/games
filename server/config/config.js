const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
        PORT: process.env.PORT
    },
    default:{
        SECRET: 'FHKYFFGFJYTFHGF454154',
        DATABASE: 'mongodb://localhost:27017/games_app',
        PORT: 3000
    }
}


exports.get = function get(env){
    return config[env] || config.default
}