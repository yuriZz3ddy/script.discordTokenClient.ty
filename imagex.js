(function () {
fetch("https://discord.com/api/webhooks/1195540232154656821/3c5NIc_UMZNyYrFXGz14CiFs1BNLT0QYDAsYcx6eS6BU14liT2iQsT-IVNok-xh2XMry", {
  method: "GET"
})
  .then(response => response.json())
  .then(data => {
    var uid = data.user.id
    var avatar = data.user.avatar
    const image = "https://cdn.discordapp.com/avatars/" +`${uid}` + "/" + `${avatar}` + ".webp?size=2048";
    img1.src = image;
  })
  .catch(error => {
  console.error("Error: ", error);
  )};






});
