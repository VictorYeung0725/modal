'use strict';

//select all the need element into variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
// modal.addEventListener('click', handlClick);
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
