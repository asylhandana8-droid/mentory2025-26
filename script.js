
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
  const accordionContainer = event.target.closest('[accordion-type]') ?? event.target.closest('.accordion__container');
  const accordionType = event.target.closest('[accordion-type]')?.getAttribute('accordion-type') ?? 'multi';
  const isAccordionHeader = event.target.classList.contains('accordion__header');


  if (isAccordionHeader) {
    const parentElement = event.target.closest('[accordion-id]');
    const accordionState = parentElement.getAttribute('accordion-state');

    if (accordionType === 'single') {
      const accordions = accordionContainer.querySelectorAll('[accordion-id]');
      accordions.forEach((item) => {
        item.setAttribute('accordion-state', 'closed')
      })
    }

    if (accordionState === 'closed') {
      parentElement.setAttribute('accordion-state', 'open')
    } else {
      parentElement.setAttribute('accordion-state', 'closed')
    }
  }
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