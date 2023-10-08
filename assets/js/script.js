console.log('"dobra" - kod ale ciii')

let version = document.getElementById("version");
version.innerText = "10.0";

function showDesc() {
    let disp = document.getElementById("text"); 
    disp.innerHTML = 'Play Rainbow Cube, the new 2D platformer!<br>Fight against Boss in different modes:<br>Normal, R and Wall!<br>Discover all the secret levels hidden in other levels.<br>Rainbow Cube is a 2D platformer with many levels that differ in difficulty levels, the game<br>also has modes:<br>Normal - this is the basic mode, it does not have any "Additional" mechanics, R - this <br>mode is to change the background so that platforms and opponents will be more visible,<br>Wall - this mode is to run away from the wall that is constantly going towards you so you<br>can not stop. The game also has amazing background music. There will also be new game<br>modes in the future, but everything in its own time. The game also has a multiplayer that<br>is currently in beta. There you can race against other players by collecting a large number <br>of rainbow gems - this is the best option to earn! In the future, multiplayer will be more <br>extensive. The goal of the game "Rainbow cube" is to go through all levels and defeat <br>bosses from each mode:<br>*Normal mode - This is a triangle that as one goal in its existence is to destroy every <br>*Normal mode - This is a triangle that as one goal in its existence is to destroy every <br>Cube in this world.<br>*R mode: She\'s a spider queen who is psychic, has no purpose in defeating cubes, but <br>she does it for fun, if you her off she won\'t be so friendly.<br>*Wall mode: This is an earthworm that is just so hungry that it eats everything in its <br>path, including the rainbow cube.';
  }

function showClog() {
    const changelogDiv = document.getElementById("text");

    fetch('https://raw.githubusercontent.com/Rainbow-Cube/Changelog/main/changelog.txt')
    .then(response => response.text())
    .then(data => {
        changelogDiv.textContent = data;
    })
    .catch(error => {
        console.error('Error when downloading changelog:', error);
    });
}