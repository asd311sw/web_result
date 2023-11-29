var mysql      = require('mysql');
const { connect } = require('../db');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'team_a08'
});

connection.connect();

connection.query('SELECT * FROM member', function(err, rows, fields) {
    if (err) {
        console.log(err);
    }
    for(var i = 0; i < rows.length ; i++){
        console.log(rows[i].id, rows[i].name, rows[i].age);
    }
});


connection.end();
