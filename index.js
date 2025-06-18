 const express = require('express');
 const app = express();
 const morgan = require('morgan')

 //middleware has three types 
  // 1. bulidin middleware
  // 2. third party middleware
  // 3. custom middleware
 app.use(morgan('dev'));
   // Using morgan as a third-party middleware for logging
  
  // Built-in middleware for parsing JSON and URL-encoded data
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

  

 app.set('view engine', 'ejs');

 app.get('/',( req , res , next)=>{
    console.log('Request received at /');
    return next();
 }, (req, res) => {
   res.render('index', { title: 'Home Page' });
 });
    app.get('/about', (req, res) => {
    res.send('About Page');
    });
    app.get('/contact', (req, res) => {
    res.send('Contact Page');
    });

    app.post('/get-data', (req, res) => {
    console.log( req.body); ;

    res.send(' Data received:');
    });
    

 app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
 });