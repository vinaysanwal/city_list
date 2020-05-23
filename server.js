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
app.use('/api/users' , require('./routes/api/users'))
app.use('/api/cusers' , require('./routes/api/cusers'))
app.use('/api/programming' , require('./routes/api/programming'))
app.use('/api/jobs' , require('./routes/api/jobs'))
app.use('/api/ip' , require('./routes/api/Ip'))
app.use('/api/tools' , require('./routes/api/tools'))
app.use('/api/profile' , require('./routes/api/profile'))
app.use('/api/auth' , require('./routes/api/auth'))
app.use('/api/wauth' , require('./routes/api/wauth'))
app.use('/api/client' , require('./routes/api/stripe_app'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
