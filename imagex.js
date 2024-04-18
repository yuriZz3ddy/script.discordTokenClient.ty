fetch("https://japi.rest/discord/v1/user/933891035216613446", {
  method: "GET"
})
//acima discord Webhook bot JSON usuário
  .then(response => response.json())
  .then(data => {
    var uid = data.user.id
    var avatar = data.user.avatar
    const image = "https://cdn.discordapp.com/avatars/" +`${uid}` + "/" + `${avatar}` + ".webp?size=2048";
    img1.src = image;
    img1.style.borderRadius = "50px";
  });
