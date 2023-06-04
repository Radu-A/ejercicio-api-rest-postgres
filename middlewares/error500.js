const manage500 = function(req, res, next){
    res.status(500).json({msj:'Error! 500. Error del servidor  :)'})
}

module.exports = manage500;