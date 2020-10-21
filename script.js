var character = document.getElementById("character");
var snake = document.getElementById("snake");
var scorpion = document.getElementById("scorpion");
var a = 0;
var jumps = 0;


/*var firebaseConfig = {
    apiKey: "AIzaSyDPdoT2ThRcSpCr8UipqrsD_u-87sTKyZg",
    authDomain: "ninjajump-5ad8e.firebaseapp.com",
    databaseURL: "https://ninjajump-5ad8e.firebaseio.com",
    projectId: "ninjajump-5ad8e",
    storageBucket: "ninjajump-5ad8e.appspot.com",
    messagingSenderId: "346441750488",
    appId: "1:346441750488:web:88db99b3c2287a635444ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let myDatabase = firebase.database().child(getUniqueID());

myDatabase.child("Username").on("child_added", function(dataSnapShotHandler){
    let Data = dataSnapShotHandler.val();
    console.log(Data);
    let $new = document.createElement("li");
    $newItem.innerText = `Username: ${Data.time}`;
    document.getElementById("list").appendChild($new);
});

document.getElementById("Enter").addEventListener("click", function(){
    let clickTime = document.getElementById("username").value; 
    let newClick = yourDatabase.child("Username").push();
    newClick.set({User: clickTime}); 
  });

*/


function start(){




}

//document.getElementById("start").addEventListener("onclick", start);

function up(evt){
    console.log(evt);
    jumps += 1;
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    
    
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}
//make jump incrementer
document.addEventListener("keydown", up);

var endGame = setInterval(function(){
    var characterBorder = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var snakeBorder = parseInt(window.getComputedStyle(snake).getPropertyValue("left"));
    var scorpionBorder = parseInt(window.getComputedStyle(scorpion).getPropertyValue("left"));
    if(snakeBorder<30  && snakeBorder>-10 && characterBorder >= 315){
        snake.style.animation = "none";
        snake.style.display = "none";
        alert("Game over! Number of jumps: " + jumps);
        a = 0;
        snake.style.animation = "attack 1s infinite linear";
        
    }
    else if(scorpionBorder<30  && scorpionBorder>-10 && characterBorder >= 315){
        scorpion.style.animation = "none";
        scorpion.style.display = "none";
        alert("Game over! Number of jumps: " + jumps);
        a = 0;
        scorpion.style.animation = "zip 1.3s infinite linear";
        
    }
    else{
        a++
        document.getElementById("jumpSpan").innerHTML = jumps;
    }

},10)

var firebaseConfig = {
    apiKey: "AIzaSyDPdoT2ThRcSpCr8UipqrsD_u-87sTKyZg",
    authDomain: "ninjajump-5ad8e.firebaseapp.com",
    databaseURL: "https://ninjajump-5ad8e.firebaseio.com",
    projectId: "ninjajump-5ad8e",
    storageBucket: "ninjajump-5ad8e.appspot.com",
    messagingSenderId: "346441750488",
    appId: "1:346441750488:web:88db99b3c2287a635444ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let myDatabase = firebase.database().child(getUniqueId());

myDatabase.child("Username").on("child_added", function(dataSnapShotHandler){
    let Data = dataSnapShotHandler.val();
    console.log(Data);
    let $new = document.createElement("li");
    $newItem.innerText = `Username: ${Data.time}`;
    document.getElementById("list").appendChild($new);
});

document.getElementById("Enter").addEventListener("click", function(){
    let clickTime = document.getElementById("username").value; 
    let newClick = yourDatabase.child("Username").push();
    newClick.set({User: clickTime}); 
  });
