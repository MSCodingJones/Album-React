const express = require('express')
const router = express.Router()
const PORT =process.env.PORT || 3005

// created an array of tables inside of database
const tables = ['album', 'artist', 'band', 'label', 'genre']

// Root Route => localhost:3000/api
router.get('/', (req, res)=> {
    res.json({
        'Albums': `http://localhost:${PORT}/api/album`,
        'Artists': `http://localhost:${PORT}/api/artist`,
        'Bands': `http://localhost:${PORT}/api/band`,
        'Genres': `http://localhost:${PORT}/api/genre`,
        'Labels': `http://localhost:${PORT}/api/label`
    })
})


// loop through tables array and build router.use()
tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

module.exports = router