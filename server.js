require('dotenv').config();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const express = require ('express');



const app = express();
const port = process.env.PORT || 3000;


 // Set static folder
 app.use(express.static('client/build'));

 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });


app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });