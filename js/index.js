
 const openPopupButton = document.querySelector('.kusto__pen');
 const closePopupButton = document.querySelector('.popup__close');
 const popup = document.querySelector('.popup');
 
 function togglePopup() {
     popup.classList.toggle('popup_opened');
 }

 openPopupButton.addEventListener('click', togglePopup);
 closePopupButton.addEventListener('click', togglePopup);
 
 
// Простой код
let pageName = document.querySelector('.kusto__title').textContent;
let pagejob = document.querySelector('.kusto__subtitle').textContent;

let inname = document.getElementById('input-name');
let injob = document.getElementById('input-job');

inname.setAttribute('value', pageName);
injob.setAttribute('value', pagejob);


