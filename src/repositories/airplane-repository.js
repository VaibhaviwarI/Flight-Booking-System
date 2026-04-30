
const CrudRepository = require('./crud-repositroy')

const {Airplane} = require('../models/index')

class AirplaneRepository extends CrudRepository{

    constructor() {
        super(Airplane);

    }


}

module.exports = AirplaneRepository;