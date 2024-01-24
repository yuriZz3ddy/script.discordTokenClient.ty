function backgroundanime() {
    let div = document.createElement("div");
    div.setAttribute("class", "star");
    document.body.appendChild(div);

    //02
    div.style.left = Math.random() * innerWidth + "px";

    //03
    let size = Math.random() * 12;

    //04
    div.style.fontSize = 12 + size + "px";

    //05
    let duration = Math.random() * 3;

    //06
    div.style.animationDuration = 2 + duration + "s"

    //01
    setTimeout(() => {
        document.body.removeChild(div)
    }, 5000)
}

setInterval(() => {
    backgroundanime();
}, 100);

function backgroundanime1() {
    let div = document.createElement("div");
    div.setAttribute("class", "star1");
    document.body.appendChild(div);

    //02
    div.style.left = Math.random() * innerWidth + "px";

    //03
    let size = Math.random() * 12;

    //04
    div.style.fontSize = 12 + size + "px";

    //05
    let duration = Math.random() * 3;

    //06
    div.style.animationDuration = 2 + duration + "s"

    //01
    setTimeout(() => {
        document.body.removeChild(div)
    }, 5000)
}

setInterval(() => {
    backgroundanime1();
}, 100);