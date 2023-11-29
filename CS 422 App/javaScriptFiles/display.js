document.addEventListener('DOMContentLoaded', function() {
    // Retrieve words from localStorage
    var storedWords = JSON.parse(localStorage.getItem('userWords')) || [];
    var wordList = document.getElementById('wordList');

    // Display words on the page
    storedWords.forEach(function(word) {
        var listItem = document.createElement('li');
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });
});
