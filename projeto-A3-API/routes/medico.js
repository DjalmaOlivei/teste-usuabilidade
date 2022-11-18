const express = require('express')
const router = express.Router()

const Medico = require('../modules/Medico')

router.use(express.json())


router.post('/add',(req, res, next) => {
    
    let medico = new Medico ({
        crm:        req.body.crm,
        name:       req.body.name,
        email:      req.body.email,
        phone:      req.body.phone,
        phone2:     req.body.phone2,
        especie:    req.body.especie,
        nascimento: req.body.nascimento,
        ativo:      req.body.ativo
    })
    medico.save()
    .then(medico => {
        res.json({
            message : 'medico created successfully!',
            medico
        })
    }).catch(err => {
        res.status(500).json({
            message : "An error occured"+err
        }
        )
    })}
)

router.delete("/delete", (req, res, next) => {
    let medicoID = req.body.medicoID

    Medico.findOneAndRemove(medicoID)
    .then(() => {
       res.json({ 
        message: "medico apagada"
    })
    })
    .catch((err) => {
        res.json({
            message: "um erro ocorreu"
        })
    })
})

router.post('/update', (req, res, next) => {
    let medicoID = req.body.medicoID

    let medicoData = {
        crm:        req.body.crm,
        name:       req.body.name,
        email:      req.body.email,
        phone:      req.body.phone,
        phone2:     req.body.phone2,
        especie:    req.body.especie,
        nascimento: req.body.nascimento,
        ativo:      req.body.ativo
    }

    Medico.findByIdAndUpdate(medicoID, {$set: medicoData})
    .then(() =>{
        res.json({
            message: 'medico modificada'
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            message: 'um erro ocorreu'
        })
    })

})

router.post('/list', (req, res, next) => {

    const requestBody = req.body 
    try{
        Medico.find(requestBody).then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = router

