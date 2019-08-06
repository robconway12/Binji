//Import core node modules
var express = require('express');
var mysql = require('mysql');
var app = express();


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
	console.log("Server listening ...");
});

export default server;