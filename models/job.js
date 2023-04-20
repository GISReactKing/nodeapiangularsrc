var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// type schema

var jobSchema = mongoose.Schema({
    title:{
        type:String, required:true
    },
    
    type:{
        type:String, required:true

    },
    
    rate:{
        type:String

    },
    
    location:{
        type:String, required:true

    },
    
    link:{
        type:String, required:true

    },
    
    create_date:{
        type:Date,
         default: Date.now
    }
});


var Job = module.exports = mongoose.model('Job', jobSchema);


// Get Types function
module.exports.getJobs = function(callback, limit){
    Job.find(callback).limit(limit);
}


module.exports.getJobById  = function(id, callback){
    Job.findById(id, callback);
}


// Add Job

module.exports.addJob = function(job, callback){
    Job.create(job, callback);
}

// Update Job
// params id, type (new to be updated, options, callback)
module.exports.updateJob = function(id, job, options, callback){
    var query = { _id : id};
    var update = {
        title:job.title,
        type:job.type,
        location:job.location,
        rate:job.rate,
        link:job.link
        
 }
    Job.findOneAndUpdate(query, update, options, callback);
}




// Delete Job
// params id, type (new to be updated, options, callback)
module.exports.deleteJob = function(id, job, options, callback){
    var query = { _id : id};

    Job.remove(query, options, callback);
}

