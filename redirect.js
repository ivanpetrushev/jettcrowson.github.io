$(document).ready(function(){
	var URL = document.URL;
var authKey = URL.substr(URL.indexOf("=") + 1);
console.log(authKey);
});