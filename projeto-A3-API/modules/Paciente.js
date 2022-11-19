const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const pacienteSchema    = new Schema({

    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    sexo: {type:String, required: true},
    nascimento: {type:Date, required: true},
    celular: {type:String, required: true},
    telefone: {type:String, required: true},
    cpf: {type:Number, required: true},
    endereco: {type:String, required: true},
    email: {type:String, required: true},
    ativo: {type:Boolean, required: true},
}, {timestamps: true})

const Paciente = mongoose.model('Paciente',pacienteSchema)
module.exports = Paciente

