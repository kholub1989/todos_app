var express     = require('express'),
    app         = express(),
    // port = process.env.PORT || 3000,
    bodyParser  = require('body-parser');

// var port = process.env.PORT || 3000;
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/', function(req, res){
   res.send("Hello forom the root route!")
})

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log("APP IS RUNNING ON PORT");
})
