const express       =   require('express')
const router        =   express.Router()

const AuthController    = require("../controllers/AuthController")
const Authentication    = require("../middleware/authenticate")


router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/refresh-token', AuthController.refreshToken)
router.delete('/delete',Authentication, AuthController.dell)
router.get('/list',Authentication, AuthController.list)
router.post('/update',Authentication, AuthController.update)

module.exports = router 