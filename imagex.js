(function () {
fetch("", {
  method: "GET"
})
  .then(response => response.json())
  .then(data => {
    var uid = data.user.id
    var avatar = data.user.avatar
    const img = "https://cdn.discordapp.com/avatars/" +`${uid}` + "/" + `${avatar}` + ".webp?size=2048"
  })
  .catch(error => {
  console.error("Error: ", error);
  )};






});
