// File to return the longest word in a sentence
window.addEventListener('load', function() {
window.alert('Welcome');

var form1 = document.getElementById("form");
var text = document.getElementById('text');

// Prevent form submit from refreshing page
form1.addEventListener('submit', function(e) {
  e.preventDefault();

  //Declare variables
  var msg = '';
  var mySentence = text.value;

  //Quit if text is empty
  if (mySentence.length == 0) {
    msg = '<p>Please enter a sentence</p>';
    document.getElementById('message').innerHTML = msg;
    return;
  }
  //Gets the text fom the mySentence variable and saves the words to 'words'
  var words = mySentence.split(' ');
  var wordLength = words.map(function(word) {
    return word.length;
  })
  wordLength.sort(function(a, b) {
    return b - a;
  });
  var longestCount = wordLength[0];
  //search the words array for the longest words
  var longestWords = [];
  for (var i=0; i<words.length; i++) {
    if (longestCount == words[i].length) {
      longestWords.push(words[i]);
    }
  }
  //Prepare the result (output) and save it to msg
  if (longestWords.length === 1) {
    msg = '<p>The longest word in the sentence is: <strong>' + longestWords[0] + '</strong> with ' + longestWords[0].length + ' characters.</p>';
  }
  else if (longestWords.length >= 1) {
    msg = '<p>The longest words in the sentence are: \n<ol>';
    for (var i=0; i<longestWords.length; i++) {
      msg +='<li>' + '   ' + longestWords[i] + ' with ' + longestWords[i].length + ' characters</li>\n';
    }
    msg += '</ol></p>';
  }
  //Display the result
  document.getElementById('message').innerHTML = msg;
});
});
