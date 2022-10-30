const courses = require('../models/allCourse.schema')



const postCours = async (req, res,next) => {

    try {
 
        const corse = new courses({
            title: req.body.title,
            description: req.body.description,
            amount: Number(req.body.amount),
            img: req.body.img,
            totalEnroll: req.body.totalEnroll,
            totalClass: req.body.totalClass,
            classurl:req.body.classurl

        })
        await corse.save()
        res.status(201).json({ message: "all post is cratet" })


    } catch (error) {
        res.status(500).send(error.message)
    }

}

const getCours = async (req, res) => {
    try {
        const findCoures = await courses.find()
        res.status(200).json(findCoures)
    } catch (error) {
        res.status(500).send(error.message)
    }

}
const getOne = async (req, res) => {
    try {
        const onScour = await courses.findOne({ _id: req.params._id })
        res.status(200).json(onScour)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
const updetCours = async (req, res) => {
    try {
        const updetCours = await courses.findOne({ _id: req.params._id })

        updetCours.title= req.body.title,
        updetCours.description= req.body.description,
        updetCours.amount= Number(req.body.amount),
        updetCours.img= req.body.img,
        updetCours.totalEnroll= req.body.totalEnroll,
        updetCours.totalClass=req.body.totalClass,
        updetCours.classurl=req.body.classurl
      
        await updetCours.save()


        res.status(201).json({ message: "all post is cratet" })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


const DeleteCours = async (req, res) => {
    try {
        await courses.deleteOne({ _id: req.params._id })
        res.status(200).json({ "message": "corse  is deleted" })
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { postCours, getCours, getOne, updetCours, DeleteCours }  