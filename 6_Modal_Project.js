const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

// Modal Button

modalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal');
})

//  Close Button

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal');
})