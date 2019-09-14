const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const moongose = require('mongoose');


moongose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));


const indexRoutes= require('./src/routes/index');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'./src/views'));
app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


app.use('/',indexRoutes);


app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})
