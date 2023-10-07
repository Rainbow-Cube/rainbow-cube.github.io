function showControls() {
    let controls = "<h1>Controls</h1>D or Arrow right - Move right<br>A or Arrow left - Move left<br>Space - Jump";
    document.getElementsByClassName('wiki')[0].innerHTML = controls;
}

function showAbout() {
    let about = "<h1>About</h1>idk, ask budynofficial"
    document.getElementsByClassName('wiki')[0].innerHTML = about;
}

function showSkins() {
    let skins = "<h1>Skins</h1>Soon"
    document.getElementsByClassName('wiki')[0].innerHTML = skins;
}