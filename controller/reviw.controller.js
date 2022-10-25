const cores=require('../models/corse.model')
const reviw=require('../models/review.schema')
// const classModel=new mongoose.model('allCours', alloursSchema)

const corsPost= async(req, res,next) => {
    try {
        const  postclass= new reviw ({
            title:req.body.title,
            des:req.body.des
        })
        
 await postclass.save()
 
        res.status(201).json({ message: "class post is cratet" })
    } catch (error) {
        
    }

}
const corsGet= async(req, res) => {
    try {
        const findCoures=await reviw.find()
        res.status(200).json(findCoures)
    } catch (error) {
        res.status(500).send(error.message)
    }
   
}

const corsUpdate= async(req, res) => {
    
}
const corsdelet= async(req, res) => {
    
}

module.exports ={corsPost,corsGet,corsUpdate,corsdelet}