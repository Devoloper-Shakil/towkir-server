const router = require('express').Router()

const courses = require('../controller/allCours.controller')
const multer = require('multer')
// multer imgUploading
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name= Date.now()+"-"+ file.originalname;
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })
  


router.post('/',upload.single() ,courses.postCours)

router.get('/', courses.getCours)

router.get('/:_id', courses.getOne)

router.patch('/:_id', courses.ubdetCours)

router.delete('/:_id', courses.DeleteCours)





module.exports = router;