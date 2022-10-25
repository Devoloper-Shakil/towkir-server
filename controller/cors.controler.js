const cores=require('../models/corse.model')
const allCoures=require('../models/allCourse.schema')
// const classModel=new mongoose.model('allCours', alloursSchema)

const corsPost= async(req, res) => {
    const  postclass= new cores ({
        title:req.body.title,
        url:req.body.url,
    
    })
    try {
        
        
       await postclass.save()
   
    // await allCours.updateOne({
    //     _id:req.allCours._id
    //    },{
        
    //     $push:{freeCourse:couresClass._id}
            
        
    //    })
        res.status(201).json({ message: "class post is cratet" })
    } catch (error) {
        
    }

}
const corsGet= async(req, res) => {
    try {
        const findCoures=await cores.find()
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