/*
 * GET home page.
 */

var database = require('./database');

exports.index = function(req, res){
	database.gameWinner = -1;
	res.render('index', { title: 'SpeedCoder'});
};

exports.racer = function(req, res){
	if(database.currentUser == 0)
		database.currentUser = 1;
	else if(database.currentUser == 1)
		database.currentUser = 2;
	else if(database.currentUser == 2)
		database.currentUser = 1;
	res.render('race', { title: 'SpeedCoder', question: database.questions[0], questionID: 0, userID: (database.currentUser-1)});
};
