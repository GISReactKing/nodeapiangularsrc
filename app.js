var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// middleware
app.use(bodyParser.json());

// set static path for front end
app.use(express.static(__dirname + '/public')); 

Type = require('./models/type');
Job = require('./models/job');

// connect to mongoose

mongoose.connect('mongodb_connection_uri');

// db object
var db = mongoose.connection;

// routing
app.get('/', function(req, res){
    
    res.send('Please use /api/jobs');
});

// job type route
app.get('/api/types', function(req, res){
    Type.getTypes(function(err, types){
        if(err){
            throw err;
            
        }
        res.json(types);   
    })
});

// get all the jobs
app.get('/api/jobs', function(req, res){
    Job.getJobs(function(err, jobs){
        if(err){
            throw err;
            
        }
        res.json(jobs);   
    })
});

// get a job
app.get('/api/jobs/:_id', function(req, res){
    Job.getJobById(req.params._id,  function(err, job){
        if(err){
            throw err;
            
        }
        res.json(job);   
    })
});

// add a type
app.post('/api/types/', function(req, res){
    
    var type = req.body;
    
    Type.addType(type,  function(err, type){
        if(err){
            console.log(err);
            throw err.message;
            
        }
        res.json(type);   
    })
});


// add a job
app.post('/api/jobs/', function(req, res){
    
    var job = req.body;
    
    Job.addJob(job, function(err, job){
        if(err){
            console.log(err);
            Object.keys(err.errors).forEach(function(key) {
             var message = err.errors[key].message;
             console.log('Validation error for "%s": %s', key, message);
             });
            
        }
      
    })
      res.json(job);   
});


// update a type
app.put('/api/jobs/:_id', function(req, res){
    
    var id = req.params._id;
    var type = req.body;
    Job.updateJob(id, type,  {}, function(err, job){
        if(err){
            console.log(err);
            throw err.message;
            
        }
        res.json(type);   
    })
});

// update a job
app.put('/api/job/:_id', function(req, res){
    
    var id = req.params._id;
    var job = req.body;
    Type.updateType(id, job,  {}, function(err, job){
        if(err){
            console.log(err);
            throw err.message;
            
        }
        res.json(job);   
    })
});



// delete a type
app.delete('/api/types/:_id', function(req, res){
    
    var id = req.params._id;
     Type.deleteType(id,  {}, function(err, type){
        if(err){
            console.log(err);
            throw err.message;
            
        }
        res.json(type);   
    })
});


// delete a job
app.delete('/api/jobs/:_id', function(req, res){
    
    var id = req.params._id;
     Job.deleteJob(id,  {}, function(err, job){
        if(err){
            console.log(err);
            throw err.message;
            
        }
        res.json(job);   
    })
});





app.listen('3000');
console.log('server online');



 
