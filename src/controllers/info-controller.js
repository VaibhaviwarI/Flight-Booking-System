const {StatusCodes} = require('http-status-codes')

const info = (req,res) => {

    return res.staus(StatusCodes.OK).json({
        success : true,
        message : "API is Live",
        error: {},
        data : {}
    })


}


module.exports = {info}