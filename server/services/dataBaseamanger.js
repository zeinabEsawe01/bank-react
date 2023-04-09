const mongoose = require('mongoose')

    function connect(){
        mongoose.connect("mongodb://127.0.0.1:27017/bank", {
            useNewUrlParser: true,
          }).catch((err)=> console.log(err))        
    }
  

module.exports = { connect }