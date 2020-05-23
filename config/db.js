const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
mongoose.Promise = global.Promise
const connectDB = async () => {
    try {
      await mongoose.connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true ,
          useCreateIndex : true,
          useFindAndModify: false
      });

      console.log("database connected");
    }catch(err){
       console.log(err.message);
       process.exit(1);
    }
}

module.exports = connectDB;
