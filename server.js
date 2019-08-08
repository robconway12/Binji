/* 

        - MovieDB API  https://www.themoviedb.org/documentation/api?language=en
        - Heroku https://binji.herokuapp.com/
*/



//Import core node modules
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var Promise = require('promise');
var app = express();
var path = require('path');


//Used for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//Setup Port for Heroku Deployment
const port = process.env.PORT || 8080
app.set('port', port);


app.use(express.static(__dirname + '/client/build')); 


//Assign site constants
// const siteTitle = "binji";
// const baseURL = "/";
const baseURL = "http://localhost:" + port + "/";
// const TMDB_API_KEY = "d03fc0e64d561bfed0fdc80a54d08b43"; //Oh no don't steal my api key!! D:
// const TMDB_BasePoster = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

//Use TheMovieDB API to pull information about programs
// const TheMovieDB = require('moviedb')(TMDB_API_KEY);



//Dev database connection
const db_config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
	database: "wya8taajim14m0yb"
};

//Database connection details for Heroku and JawsDB
// const db_config = {
//     host: "ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user: "e18gtjaprrkqy98n",
//     password: "w5ow0fo6ag545ktj",
// 	database: "wya8taajim14m0yb"
// };

var dbConnection;
handleDisconnect();


//Setup Database connection and handle timeout problems
function handleDisconnect(){
    dbConnection = mysql.createConnection(db_config);
    console.log("Successfully connected to Database.");
    dbConnection.connect(function(err){
        if(err){
            console.log('Error when connecting to DB: ', err);
            setTimeout(handleDisconnect, 5000);
        }
    });
    dbConnection.on('error', function(err){
        console.log('DB ERROR ', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('Lost connection. Reconnecting...');
            handleDisconnect();
        }
        else{
            throw err;
        }
    });
}

app.get("/data", function (req, res) { 
    dbConnection.query("SELECT * FROM programs ORDER BY progID DESC", function(err, rows, fields){
        if(err){
            console.log("Error loading from DB");
            return reject(err);
        }
        else{
            res.send(rows);
            console.log("rows: " + rows);
        }
    });
 })

app.get("/watchlist", function(req, res) {
    dbConnection.query("SELECT * from programs", function(
      error, results
    ) {
      if (error) throw error;
      res.send(results);
    }); 
  })

//Add selected title  to DB
app.post('/title/add', function(request, response){
    // change to capture request body, grab appropriate information to post to db, then redirect to the list page

    const result = request.body;
    var query = "INSERT INTO programs (title, year, progID, description, poster, userID, media_type, genre)";
    var parameterizedQuery = `
    INSERT INTO programs
        (title, year, progID, description, poster, userID, media_type, genre) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    userID = 1; 

    const queryParams = [
        (result.title || result.name),
        (result.release_date || result.first_air_date),
        result.id,
        result.overview,
        result.poster_path,
        userID,
        result.media_type,
        result.genre
    ]
    console.log('params: ', queryParams);
    
    console.log("[ADDING ENTRY] Query  :\n" + query + queryParams);
    
    dbConnection.query(parameterizedQuery, queryParams, function(err, result){
        response.redirect("/list"); 
        if(err) throw err;
    });
    
    // dbConnection.query(query, function(err, result){
    //     if(err) throw err;
    //     response.redirect("/list"); 
    // });
});


// Delete movie entryfrom database
// route should be app.remove('/title/:progId')
app.get('/title/delete/:progId', function(request, response){
    
    console.log("[DELETING ENTRY] Deleted Item " + request.params.progId);
    
    dbConnection.query("DELETE FROM programs WHERE progId='" + request.params.progId + "'", 
    function(err, result){
        if(err) throw err;
        if(result.affectedRows){
            console.log("[DELETING ENTRY] REDIRECTING]");
            response.redirect(baseURL);   
        }
    });
});


 // Define any API routes before this runs
 app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
// Connect to Server
app.listen(app.get('port'), function(){
	console.log("Server listening on " + baseURL + " ...");
});

