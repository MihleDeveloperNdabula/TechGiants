function genWally() {
    
    let fromTop = Math.random() * document.body.scrollHeight;
    let fromLeft = Math.random() * document.body.scrollWidth;

    let wally = document.createElement("img");
    wally.src = "Images/wally.png";
    wally.id = "wally";

    wally.style.position = "absolute";
    wally.style.width = "2.5%";
    wally.style.opacity = "30%"
    wally.style.left = fromLeft + "px";
    wally.style.top = fromTop + "px";
    wally.style.zIndex = 5;

    document.body.appendChild(wally);
    wally.addEventListener("click", clickWally);

}

function clickWally(){
    let wally = document.getElementById("wally");
    let left = wally.style.left;
    let top = wally.style.top;
    
    // Create the message
    let text = document.createElement("p");
    text.style.position = "absolute";
    text.style.left = left;
    text.style.top = top;
    text.style.fontSize = "50px";
    text.style.color = "red";
    text.style.zIndex = 5;
    
    // Start fully opaque
    text.style.opacity = 1;
    // Add a smooth fade effect
    text.style.transition = "opacity 2s ease";

    text.innerHTML = "You found Wally!!!";

    // Remove Wally
    document.body.removeChild(wally);
    // Add message to the page
    document.body.appendChild(text);

    // Trigger fade after a tiny delay
    setTimeout(() => {
        text.style.opacity = 0;
    }, 50); // small delay ensures transition works

}

window.onload = genWally;


// function clickWally(){

// }