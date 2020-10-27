$(document).ready(function() {
  $("form#wordPuzzle").submit(function(event) {
    event.preventDefault();
    const userWord = $("input#userInput").val().toLowerCase();
    const userString = userWord.split("");
    for(let i = 0; i < userWord.length; i += 1) {
      userWord.toLowerCase();
      if (userString[i] === "a" || userString[i] === "e" || userString[i] === "i" || userString[i] === "o" || userString[i] === "u") {    
        userString[i] = "-";
      } 
    }
    alert(userString.join(""));
  });
});