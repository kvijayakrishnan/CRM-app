require('dotenv').config();
const express = require('express');
const db = require('./db/connect');
const cors = require('cors')

//Importing routes
const employeeRoutes = require('./routes/employees.route');



const app = express();

//connecting data base
db();


 //To parser JSON object
app.use(express.json());   

app.get('/', (req,res)=>{
    res.send('Welcome to my app');
})

//custom middleware
app.use(employeeRoutes);
app.use(cors);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
})






