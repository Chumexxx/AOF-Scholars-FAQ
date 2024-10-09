// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const questionsCards = Array.from(document.querySelectorAll('.questionsCard')); // Convert NodeList to array

    // Initially hide all the answers
    questionsCards.forEach(card => {
        const answer = card.querySelector('#answers');
        answer.style.display = 'none'; // Hide the answer
    });

    // Toggle answer visibility when the entire card is clicked
    questionsCards.forEach(card => {
        card.addEventListener('click', function() {
            const answer = card.querySelector('#answers');
            if (answer.style.display === 'none') {
                answer.style.display = 'block';  // Show answer
            } else {
                answer.style.display = 'none';   // Hide answer
            }
        });
    });


    // Add event listener to the search input
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();

        // Filter the questionCards based on the search query
        const filteredCards = questionsCards.filter(card => {
            const questionText = card.querySelector('#questions').innerText.toLowerCase();
            const answerText = card.querySelector('#answers').innerText.toLowerCase();

            // Check if the query is found in the question or answer text
            return questionText.includes(query) || answerText.includes(query);
        });

        // Hide all cards initially
        questionsCards.forEach(card => card.style.display = 'none');

        // Show only the filtered cards
        filteredCards.forEach(card => card.style.display = 'block');
    });
});
