/* 

        - MovieDB API  https://www.themoviedb.org/documentation/api?language=en
        - Heroku https://binji.herokuapp.com/
*/



//Import core node modules
var express = require('express');
var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var Promise = require('promise');
var app = express();


//Used for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));



//Setup Port for Heroku Deployment
app.set('port', (process.env.PORT || 8889 ));

// Import all JavaScript and CSS files for application
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(__dirname + '/public')); 


//Assign site constants
const siteTitle = "binji";
// const baseURL = "/";
const baseURL = "http://localhost:" + app.get('port') + "/";
const TMDB_API_KEY = "d03fc0e64d561bfed0fdc80a54d08b43"; //Oh no don't steal my api key!! D:
const TMDB_BasePoster = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

//Use TheMovieDB API to pull information about programs
const TheMovieDB = require('moviedb')(TMDB_API_KEY);



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



// Connect to Server
var server = app.listen(app.get('port'), function(){
	console.log("Server listening on " + baseURL + " ...");
});



//Query the programs Table for all programs
function getprograms(){
    return new Promise(function(resolve, reject){
        dbConnection.query("SELECT * FROM programs ORDER BY progID DESC", function(err, rows, fields){
            if(err){
                console.log("Error loading from DB");
                return reject(err);
            }
            else{
                return resolve(rows);
                console.log("something happened here");
            }
        });
    });
}



//Load TMDB image path and overview using progId
function loadDataTMDB(progId){
    console.log("Fetching TMDB Data for progId: " + progId);
    return new Promise(function(resolve, reject){
        TheMovieDB.Info({id: progId}, function(err, result){
            if(err){
                return reject(err);
            }
            else{
                return resolve([(TMDB_BasePoster + result.poster_path), result.overview]);
            }
        });
    });
}



//Load All TMDB image paths and overviews using Promises
function loadAllDataTMDB(rows){
    var images = [];
    var overviews = [];
    var promises = [];
    console.log("Fetching data from TMDB.");
    
    return new Promise(function(resolve, reject){
        rows.forEach(function(row, index){
            promises.push(loadDataTMDB(row.progID).then(function(data){
                images[index] = data[0];
                overviews[index] = data[1];
                console.log("Found image: " + data[0] + " for ID: " + row.progID);
            }));
        });
        
        if(promises.length == rows.length){
            console.log("All promises have been added.");
            
            Promise.all(promises).then(function(data, err){
                // console.log(data);
                if(err){
                    console.log("All TMDB Data Promises were not fulfilled!");
                    return reject(err);
                }
                else{
                    console.log("All TMDB Data Promises were fulfilled!");
                    return resolve([images, overviews]);
                }
            });
        }
    });
}



//Load default page and list titles from mySQL DB
app.get('/', function (request, response){
    console.log("Got to Index.");
    getprograms().then(function(rows){
        if(rows.length == 0){
            console.log("Table is empty. Rendering Page...");
            response.render('pages/index.ejs', {
                siteTitle : siteTitle,
                pageTitle : "programs",
                programs : null
            });
        }
        else{
            console.log("Successfully loaded data from DB.");
            loadAllDataTMDB(rows).then(function(data, err){
                if(err){
                    throw err;
                }
                else{
                    response.render('pages/index.ejs', {
                        siteTitle : siteTitle,
                        pageTitle : "programs",
                        programs : rows,
                        images : data[0],
                        overviews : data[1]
                    });
                }
            }).catch(function(e){
                console.log(e.stack);
            });
        }
    }).catch(function(e){
        console.log(e.stack);
    });
});



//Display form to Search for Movie Entry to Add
app.get('/title/add', function (request, response){
    response.render('pages/add-title-search.ejs', {
        siteTitle : siteTitle,
        pageTitle : "Search For Movie",
        programs : null,
    });
});



//Display form for quantity of selected title
app.get('/title/add/:progId', function(request, response){
    // console.log(response);
    TheMovieDB.movieInfo({id: request.params.progId}, function(err, result){
        response.render('pages/add-title.ejs', {
            siteTitle : siteTitle,
            pageTitle : "Add Selected Movie",
            TMDB_data : result,
        });
    });
});



//Add selected title  to DB
app.post('/title/add/:progId', function(request, response){
    
    var id = ("" + request.params.progId).substring(1, request.params.progId.length);
    console.log(id);
    TheMovieDB.movieInfo({id: id}, function(err, result){
        console.log(result);
        var query = "INSERT INTO programs (title, year, progID, description, poster, userID)";
        
        userID = 1; 
        
        query += " VALUES (";
            query += " '" + result.title + "',";
            query += " '" + result.release_date + "',";
            // query += " '" + result.media_type + "',";
            query += " '" + id + "',";
            query += " '" + result.overview + "',";
            query += " '" + result.poster_path + "',";
            query += " '" + userID + "'";

        query += ")";
        
        console.log("[ADDING ENTRY] Query  :\n" + query);
        
        dbConnection.query(query, function(err, result){
            if(err) throw err;
            response.redirect(baseURL); 
        });
    });
});



//Search for entries of programs from TMDB
app.post('/title/add', function(request, response){
    
    /*NOTE: Due to limited queries/second from TMDB's API,
        this will only show the first 20 entries. Implementing pages
        would be a workaround for this.
    */
    
    TheMovieDB.searchMovie({query: request.body.title }, function(err, result){
        if(result != null && result.total_results >= 1){
            //console.log(res.results);
            console.log("[ADDING ENTRY] Found " + result.total_results + " results.");
            console.log("[ADDING ENTRY] Loading search results...");
            response.render('pages/add-title-search.ejs', {
                siteTitle : siteTitle,
                pageTitle : "Select Movie",
                programs : result.results,
            });
        }
        else{
            console.log("[ADDING ENTRY] No search results found.");
            response.redirect(baseURL + 'title/add');
        }
    }); 
});

//Delete movie entry from database
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
