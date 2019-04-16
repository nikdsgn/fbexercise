var database = [
{
	username: "nik",
	password: "supersecret"
}
];

var newsFeed = [
{
	username: "bob",
	timeline: "timeline message"
},
{
	username: "sally",
	timeline: "timeline message2"
}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");


function signIn(username, password) {
	if (username === database[0].username && password === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, not matching username/password");
	}
}

signIn(userNamePrompt, passwordPrompt);