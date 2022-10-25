const router =require('express').Router() 
const cours = require('../controller/cors.controler')
const allCoures=require('../models/allCourse.schema')

router.post('/',allCoures, cours.corsPost)


router.get('/',cours.corsGet )

// router.get('/:_id', courses.getOne )

// router.patch('/:_id', courses.ubdetCours)

// router.delete('/:_id', courses.DeleteCours)
module.exports=router;