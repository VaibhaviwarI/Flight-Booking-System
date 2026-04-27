const express = require('express')

const {InfoController} = require('../../controllers')

const router = express.Router();

const app = express();



router.get('/info', InfoController.info)



module.exports = router;