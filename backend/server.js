const express = require('express');
const cors = require('cors'); // Essential for development
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000 ; 
require('dotenv').config();
const usersRouter = require('./routes/users')
const leadsRouter = require('./routes/leads')
// 1. Middleware
// Enable CORS for all origins during development
app.use(cors());
// Allows Express to read JSON data sent in POST requests
app.use(express.json());



// 3. Start the Server
app.listen(PORT, () => {
  console.log(`✅ Express backend running on http://localhost:${PORT}`);
});

//Mongoose Connection
mongoose.connect( process.env.MongoDB_URI)
.then(()=>console.log('connected successfully to MongoDB'))
.catch(err=>{
    console.error('Connection to MongoDB failed')
    process.exit(1)
})

app.use('/api/users', usersRouter);
app.use('/api/leads', leadsRouter);
