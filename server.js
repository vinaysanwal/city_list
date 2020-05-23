const express = require('express');
const app = express();
const connectDB = require('./config/db')
const expressip = require('express-ip');
var cors = require('cors')

app.use(cors())


//Connect Database 

connectDB();

// Init Middleware 

app.use(express.json({extended: false }));
app.use(expressip().getIpInfoMiddleware);



//Define Routes 
app.use('/api/users' , require('./routes/api/user'))
app.use('/api/auth' , require('./routes/api/auth'))
app.use('/api/city_list' , require('./routes/api/city'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
