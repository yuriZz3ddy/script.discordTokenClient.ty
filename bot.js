function op() {
	var Text1 = document.getElementById("ip1");
var Text2 = document.getElementById("ip2");
var Text3 = document.getElementById("ip3");
const URL = Text1.value;
var txt1 = Text2.value;
var txt2 = Text3.value;
fetch(URL, {
method: "POST",
headers: {
	"Content-Type" : "application/json"
	},
	body: JSON.stringify({
		avatar_url: "https://cdn.discordapp.com/attachments/1050227209383706688/1175156206172639343/20231117_153101.jpg?ex=65bd4300&is=65aace00&hm=fd3356da7ba57d05a5088d03a494e99f517bb98c50656314e50ffc29e6e0c899&",
		username: "neko Dark",
		content: txt1,
		embeds: [{
		title: txt2
		}]
		}),
	})
	.then(response => response.text())
	.then(data => {
		alert(data)
		});
		
		};