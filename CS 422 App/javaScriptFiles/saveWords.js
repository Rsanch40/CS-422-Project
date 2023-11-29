// localStorage.clear();

document.addEventListener('DOMContentLoaded', function() {
    localStorage.clear();
    var openPopupButton = document.getElementById('openPopupButton');
    var closePopupButton = document.getElementById('closePopup');
    var popupContainer = document.getElementById('popupContainer');

    openPopupButton.addEventListener('click', function() {
        popupContainer.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });

    var submitInputButton = document.getElementById('submitInput');
    var inputText = document.getElementById('inputText');

    submitInputButton.addEventListener('click', function() {
        var inputValue = inputText.value;

        // Retrieve existing words from localStorage
        var storedWords = JSON.parse(localStorage.getItem('userWords')) || [];

        // Add the new word to the list
        storedWords.push(inputValue);

        // Save the updated list back to localStorage
        localStorage.setItem('userWords', JSON.stringify(storedWords));

        alert('You typed: ' + inputValue);
        // You can do something else with the input value here
        popupContainer.style.display = 'none';
    });
});

