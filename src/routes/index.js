//routes
const { Router } = require('express');
const router = Router();



router.get('/',(req,res) => {
    res.json({"Title":"hello"});
});

module.exports = router;