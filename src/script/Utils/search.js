import dataMusic from "./dataMusic.js"
const searchInput = document.getElementById('search-input');

// Слухаємо подію input для вводу
searchInput.addEventListener('input', function() {
    // Отримуємо значення введеного тексту
    const searchText = this.value.toLowerCase();
    
    // Фільтруємо масив даних за введеним текстом
    const filteredData = dataMusic.filter(function(item) {
        // Перевіряємо, чи містить заголовок або виконавець поточного елемента введений текст
        return item.title.toLowerCase().includes(searchText) || item.artist.toLowerCase().includes(searchText);
    });
    
    // Викликаємо функцію для відображення відфільтрованих даних
    displayResults(filteredData);
});

// Функція для відображення результатів пошуку
function displayResults(results) {
    // Очищаємо вміст контейнера результатів
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    // Проходимося по кожному елементу результатів
    results.forEach(function(item) {
        // Створюємо HTML-рядок для кожного результату
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        // Додаємо заголовок та виконавця до HTML-рядка
        resultElement.innerHTML = `<h3>${item.title}</h3><p>${item.artist}</p>`;

        // Додаємо HTML-рядок до контейнера результатів
        resultsContainer.appendChild(resultElement);
        
    });
}
