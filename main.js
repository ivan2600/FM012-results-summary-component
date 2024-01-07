fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    

    const iconsContainer = document.getElementById('icons-container');

    data.forEach(jsonData => {
      const iconElement = document.createElement('img');
      iconElement.src = jsonData.icon;
      iconElement.alt = jsonData.category;
      iconElement.title = `${jsonData.category} - Score: ${jsonData.score}`;
      iconsContainer.appendChild(iconElement);
      const categoryElement = document.createElement('p');
      categoryElement.classList.add('category')
      categoryElement.innerHTML = jsonData.category;
      iconsContainer.appendChild(categoryElement);
      const scoreElement = document.createElement('p');
      scoreElement.classList.add('score');
      scoreElement.innerHTML = jsonData.score + " / 100";
      iconsContainer.appendChild(scoreElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });