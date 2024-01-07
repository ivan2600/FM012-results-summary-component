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
      const divElement = document.createElement('div');
      divElement.classList.add(`${jsonData.category}`);
      iconsContainer.appendChild(divElement);
      const iconElement = document.createElement('img');
      iconElement.src = jsonData.icon;
      iconElement.alt = jsonData.category;
      iconElement.title = `${jsonData.category} - Score: ${jsonData.score}`;
      divElement.appendChild(iconElement);
      const categoryElement = document.createElement('p');
      categoryElement.classList.add('category')
      categoryElement.innerHTML = jsonData.category;
      divElement.appendChild(categoryElement);
      const scoreElement = document.createElement('p');
      scoreElement.classList.add('score');
      scoreElement.innerHTML = jsonData.score + `<span> / 100</span>`;
      divElement.appendChild(scoreElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });