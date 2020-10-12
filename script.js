var character = 
document.getElementById("character");

var block = document.getElementById("block");
document.addEventListener('onclick', jump);

var counter = 0;

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    
    
    setTimeout(function(){
        character.classList.remove("animate");
    },400)
}

document.addEventListener("keydown", jump);

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20  && blockLeft>-10 && characterTop >= 200){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game over! Number of jumps: " + Math.floor(counter/50));
        counter = 0;
        block.style.animation = "block 0.5s infinite linear";
    }
    else{
        counter++
        document.getElementById("jumpSpan").innerHTML = Math.floor(counter/50);
    }

},10)
