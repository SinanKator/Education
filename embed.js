window.addEventListener("load", () => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    player.style.width = "600px";
    player.style.height = "600px";
    document.getElementById("game").appendChild(player);
    player.load("sumo_ball.swf");
})
