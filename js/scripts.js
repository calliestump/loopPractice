$(document).ready(function() {
  $("form#wordPuzzle").submit(function(event) {
    event.preventDefault();
    //let userWord = [$(".userInput")];
    const userWord = $("input#userInput").val();
    const userString = userWord.split("");
    //console.log(userString);
    //console.log(userWord);
    const vowels = ["a","e","i","o","u"];
    for(let i = 0; i < userWord.length; i += 1) {
      // if (vowels.includes(userWord[index])) // array method
      //if (userWord[index].includes(vowels)) { // string method
      if (userString[i] === "a" || userString[i] === "e" || userString[i] === "i" || userString[i] === "o" || userString[i] === "u") {    
        userString[i] = "-";
      } 
      //userString.join();
    }
    alert(userString.join(""));
  });
});
/*user enters: Apple "-ppl-"
newUserWord = "";
if (userWord.charAt(index) = 'a') {
  let newUserWord += "-";

} */