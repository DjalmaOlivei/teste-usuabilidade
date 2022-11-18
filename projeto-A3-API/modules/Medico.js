const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const medicoSchema    = new Schema({

        crm:   {
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
        especie: {
            type: String
        },
        nascimento: {
            type: Date
        },
        ativo:  {
            type: Boolean
        }
}, {timestamps: true})

const Medico = mongoose.model('Medico',medicoSchema)
module.exports = Medico

