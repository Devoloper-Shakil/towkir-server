const router =require('express').Router() 
const reviw = require('../controller/reviw.controller')

router.post('/', reviw.corsPost)


router.get('/',reviw.corsGet )

// router.get('/:_id', courses.getOne )

// router.patch('/:_id', courses.ubdetCours)

// router.delete('/:_id', courses.DeleteCours)
module.exports=router;