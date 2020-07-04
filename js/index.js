
 const openPopupButton = document.querySelector('.kusto__pen');
 const closePopupButton = document.querySelector('.popup__close');
 const popup = document.querySelector('.popup');
 
 function togglePopup() {
     popup.classList.toggle('popup_opened');
 }

 openPopupButton.addEventListener('click', togglePopup);
 closePopupButton.addEventListener('click', togglePopup);
 
 

let pageName = document.querySelector('.kusto__title').textContent;
let pagejob = document.querySelector('.kusto__subtitle').textContent;




console.log(pagejob);



















// Подтягиваем имя и работу со страницы. Простая конструкция
// var pageName = document.querySelector('.kusto__title').textContent;
// var inputName = document.getElementById('input-name');
// inputName.setAttribute('value', pageName);

// Подтягиваем имя и работу со страницы. Одна строчка

// document.getElementById('input-name').setAttribute('value', document.querySelector('.kusto__title').textContent);

