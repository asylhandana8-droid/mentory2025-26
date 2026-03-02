
// Модалки простые
// const modalOpenBtns = document.querySelectorAll('.open-modal');
// const modalCloseBtn = document.querySelector('.close-modal')

// const modals = document.querySelectorAll('.modal');


// modalCloseBtn.addEventListener('click', () => {
//   modal.classList.remove('open');
// });

// modalOpenBtns.forEach((item) => {
//   item.addEventListener('click', () => {
//     modals[0].classList.add('open');
//   });
// })


// Модалки продвинутые
const openModalButtons = document.querySelectorAll('[data-modal-action="open-modal"]');
const closeModalButtons = document.querySelectorAll('[data-modal-action="close-modal"]');
const modalWindows = document.querySelectorAll('[data-modal-action="modal"]');


openModalButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

closeModalButtons.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});


function openModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.getAttribute('data-modal') === event.target.getAttribute('data-modal')) {
      modal.classList.add('open')
    }
  });
}

function closeModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.getAttribute('data-modal') === event.target.getAttribute('data-modal')) {
      modal.classList.remove('open')
    }
  });
}

// Аккордионы

const accordions = document.querySelectorAll('.accordion__container');

function toggleAccordion(event) {
  const accordionContainer = event.currentTarget;
  const accordionType = accordionContainer.getAttribute('accordion-type') ?? 'multi';
  const accordionHeader = event.target.closest('.accordion__header');

  if (!accordionHeader || !accordionContainer.contains(accordionHeader)) {
    return;
  }

  const parentElement = accordionHeader.closest('[accordion-id]');
  if (!parentElement) {
    return;
  }

  const isOpen = parentElement.getAttribute('accordion-state') === 'open';

  if (accordionType === 'single') {
    const accordionItems = accordionContainer.querySelectorAll('[accordion-id]');
    accordionItems.forEach((item) => {
      item.setAttribute('accordion-state', 'closed');
    });
  }

  parentElement.setAttribute('accordion-state', isOpen ? 'closed' : 'open');
}

accordions.forEach((accordion) => {
  accordion.addEventListener('click', toggleAccordion)
})


const modalContents = document.querySelectorAll('.modal__content');

modalWindows.forEach((modal) => {
  modal.addEventListener('click', (event) => {
 
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });
});

modalContents.forEach((content) => {
  content.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
