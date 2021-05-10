const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

router.get('/',(req,res) => {
    res.json(movies);
});

router.post('/',(req,res) => {
    const { title , director , Year , Rating}  = req.body;
    if( title && director && Year && Rating ) {
        const id = movies.length + 1
        const newMovie = {...req.body , id }
        movies.push(newMovie);
        res.json(movies)
    } else {
        res.status(500).json({ error: 'There was an error.'});
    }
    
});


router.put('/:id',(req,res) => {
    const { id } = req.params
    const { title , director , Year , Rating}  = req.body;
    if( title && director && Year && Rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.Year = Year;
                movie.Rating = Rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({ error:"there was an error."});
    }
})


router.delete('/:id', (req ,res) => {
    const { id } = req.params
    _.each(movies, (movie,i) => {
        if (movie.id == id) {
            movies.splice(i,1)
        }
    })
    res.send(movies);
});



module.exports = router;