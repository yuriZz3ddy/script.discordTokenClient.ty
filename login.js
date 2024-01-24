function op() {
	var Text1 = document.getElementById("ip1");
var Text2 = document.getElementById("ip2");
var txt1 = Text1.value;
var txt2 = Text2.value;
const post = async () => {
fetch("https://discord.com/api/v9/auth/login", {
method: "POST",
headers: {
	"Content-Type" : "application/json"
	},
	body: JSON.stringify({
		"login" : txt1,
		"password" : txt2
		}),
	})
	.then(response => response.json())
	.then(data => {
		var send = data.token;
		alert(data.token);
		navigator.clipboard.writeText(data.token); //esquerda foi token copiar assim
		console.log(data);
		});
		};
		post();
};
