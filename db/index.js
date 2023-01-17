const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crud', function(err,result){
    if(err){
        console.log(`INI ERROR : ${err}`)
    }else{
        console.log(`BERHASIL TERSAMBUNG : ${result}`)
    }
});

// const db = mongoose.connection
// module.exports = db