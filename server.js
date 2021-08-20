const express = require('express');
const winston = require('winston');
const app = new express();
const cluster = require('cluster');
const numCpus = require('os').cpus().length;
const process = require('process');


require('./startup/routes')(app);

const port = process.env.PORT || 3000;

if(cluster.isMaster){
    console.log("number of cpu is = "+numCpus)
    console.log("Master Process port = "+process.pid)
    for(let i = 0; i < numCpus; i ++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
      });

    console.log("Master")
}else{
    console.log(`Worker ${process.pid} started`);
    app.listen(port,()=>{
        winston.info(`Connected with port number ${port}`)
    }) 
    console.log("Worker")
}








