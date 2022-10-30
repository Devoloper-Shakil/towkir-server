const router = require('express').Router()

const courses = require('../controller/allCours.controller')


router.post('/',courses.postCours)

router.get('/', courses.getCours)

router.get('/:_id', courses.getOne)

router.patch('/:_id', courses.updetCours)

router.delete('/:_id', courses.DeleteCours)





module.exports = router;