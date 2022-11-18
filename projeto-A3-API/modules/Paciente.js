const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const pacienteSchema    = new Schema({

        cpf:   {
            type: String
        },
        name:   {
            type: String
        },
        email:   {
            type: String
        },
        phone:   {
            type: String
        },
        phone2:{
            type: String
        },
        sexo: {
            type: String
        }, 
        nascimento: {
            type: Date
        },
        ativo:  {
            type: Boolean
        },
        endereco: {
            type: String
        }
}, {timestamps: true})

const Paciente = mongoose.model('Paciente',pacienteSchema)
module.exports = Paciente

