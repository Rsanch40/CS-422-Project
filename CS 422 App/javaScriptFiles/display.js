document.addEventListener('DOMContentLoaded', function() {
    // Retrieve words from localStorage
    var storedWords = JSON.parse(localStorage.getItem('userWords')) || [];
    var wordList = document.getElementById('wordList');

    // Display words on the page
    storedWords.forEach(function(word) {
        var listItem = document.createElement('li');
        listItem.textContent = word;
        if(word.toLowerCase() == "damp"){
            var definitionItem = document.createElement('span');
            definitionItem.textContent = ": To make something wet";
            listItem.appendChild(definitionItem);
        }

        if(word.toLowerCase() == "spate"){
            var definitionItem = document.createElement('span');
            definitionItem.textContent = ":  a large number of similar things or events appearing or occurring in quick succession.";
            listItem.appendChild(definitionItem);
        }
        wordList.appendChild(listItem);
    });
});
