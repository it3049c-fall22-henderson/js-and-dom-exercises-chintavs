// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textArea = document.getElementById("text");
const stats = document.getElementById("stat");
// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
textArea.addEventListener('input', function() {
  var textContent = textArea.value;
  var wordCount = textContent.trim().split(` `).length;
  var charCount = textContent.length;
  stats.textContent = `You've written ` + wordCount + ` words and ` + charCount + ` characters.`
});