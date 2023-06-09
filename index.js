const express = require('express');
const app =express();
const port =8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded()); 
app.use(express.static('./assets'));
app.use(expressLayouts);

app.use('/',require('./routes/index'));

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`server is running: ${port}`);
});