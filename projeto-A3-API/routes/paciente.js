const express = require('express')
const router = express.Router()

const Paciente = require('../modules/Paciente')

router.use(express.json())


router.post('/add',(req, res, next) => {
    
    let paciente = new Paciente ({
        cpf:   req.body.cpf,
        sexo:        req.body.sexo,
        name:       req.body.name,
        email:      req.body.email,
        phone:      req.body.phone,
        phone2:     req.body.phone2,
        especie:    req.body.especie,
        nascimento: req.body.nascimento,
        ativo:      req.body.ativo,
        endereco: req.body.endereco
    })
    paciente.save()
    .then(paciente => {
        res.json({
            message : 'paciente created successfully!',
            paciente
        })
    }).catch(err => {
        res.status(500).json({
            message : "An error occured"+err
        }
        )
    })}
)

router.delete("/delete", (req, res, next) => {
    let pacienteID = req.body.pacienteID

    Paciente.findOneAndRemove(pacienteID)
    .then(() => {
       res.json({ 
        message: "paciente apagada"
    })
    })
    .catch((err) => {
        res.json({
            message: "um erro ocorreu"
        })
    })
})

router.put('/update', (req, res, next) => {
    let pacienteID = req.body.pacienteID

    let pacienteData = {
        cpf:   req.body.cpf,
        sexo:        req.body.sexo,
        name:       req.body.name,
        email:      req.body.email,
        phone:      req.body.phone,
        phone2:     req.body.phone2,
        especie:    req.body.especie,
        nascimento: req.body.nascimento,
        ativo:      req.body.ativo,
        endereco: req.body.endereco
    }

    Paciente.findByIdAndUpdate(pacienteID, {$set: pacienteData})
    .then(() =>{
        res.json({
            message: 'paciente modificada'
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
        Paciente.find(requestBody).then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = router

