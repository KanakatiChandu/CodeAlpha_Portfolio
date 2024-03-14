// Get all the project cards
const projectCards = document.querySelectorAll('.project-card');

// Add a "read more" button to each project card
projectCards.forEach(card => {
  const readMoreBtn = document.createElement('button');
  readMoreBtn.textContent = 'Read More';
  readMoreBtn.classList.add('read-more-btn');
  card.appendChild(readMoreBtn);
});

// Add a click event listener to each "read more" button
const readMoreBtns = document.querySelectorAll('.read-more-btn');
readMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    const description = card.querySelector('p');
    if (description.style.height === 'auto') {
      description.style.height = '50px';
      btn.textContent = 'Read More';
    } else {
      description.style.height = 'auto';
      btn.textContent = 'Read Less';
    }
  });
});

// Set the initial height of each project description
projectCards.forEach(card => {
  const description = card.querySelector('p');
  description.style
}
)
