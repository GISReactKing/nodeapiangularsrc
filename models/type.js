var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// type schema

var typeSchema = mongoose.Schema({
    name:{
        type:String, required:true
    },
    

    create_date:{
        type:Date,
         default: Date.now
    }
});

var Type = module.exports = mongoose.model('Type', typeSchema);


// Get Types function
module.exports.getTypes = function(callback, limit){
    Type.find(callback).limit(limit);
}

// Add Type

module.exports.addType = function(type, callback){
    Type.create(type, callback);
}


// Update Type
// params id, type (new to be updated, options, callback)
module.exports.updateType = function(id, type, options, callback){
    var query = { _id : id};
    var update = {
        name:type.name                        
 }
    Type.findOneAndUpdate(query, update, options, callback);
}

// Delete Type
// params id, type (new to be updated, options, callback)
module.exports.deleteType = function(id, type, options, callback){
    var query = { _id : id};

    Type.remove(query, options, callback);
}



