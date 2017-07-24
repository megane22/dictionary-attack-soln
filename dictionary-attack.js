var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  //get what the user input as their password
  //in .html, the input box has id=pw
  var input = document.getElementById("pw").value;

  //loop through alllllllll the words in the word list
  //earlier, wordsList was set to contain a list of English words
  for (var index = 0; index < wordsList.length; index++) {

    //warn them if their password matches a word from the list
    if (wordsList[index] == input) {
      alert("that is a weak password! it's an English word.");
      return; //stop this function as soon as I find this match
    }

    //warn them if that word from the list, when I "leetify" it,
    //matches their input
    //EX: wordsList[index] is 'hello', leetify(wordsList[index]) is 'h3ll0'
    if (leetify(wordsList[index]) == input) {
      alert(input + " is a weak password! it's too close to " + wordsList[index]);
      return; //stop this function as soon as I find a leetified match
    }
  }

  //after the for loop finishes, if it wasn't an English word,
  //tell them their password is safe
  alert("Your password is just fine :D ");
}

//test function - change a words vowels into numbers
function leetify(word) {
  //get the word in all lowercase letters
  var modifiedWord = word.toLowerCase();

  //replace all As with the number 4
  modifiedWord = modifiedWord.replace(/a/g, '4');

  //replace all Es with the number 3
  modifiedWord = modifiedWord.replace(/e/g, '3');

  //replace all Is with the number 1
  modifiedWord = modifiedWord.replace(/i/g, '1');

  //replace all Os with the number 0
  modifiedWord = modifiedWord.replace(/o/g, '0');

  //send it back
  //console.log(modifiedWord);
  return modifiedWord;
}
