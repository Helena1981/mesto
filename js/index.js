
 const openPopupButton = document.querySelector('.kusto__pen');
 const closePopupButton = document.querySelector('.popup__close');
 const popup = document.querySelector('.popup');
 
 function togglePopup() {
     popup.classList.toggle('popup_opened');
 }

 openPopupButton.addEventListener('click', togglePopup);
 closePopupButton.addEventListener('click', togglePopup);
 
 
// Берём заголовок и подзаголовок на странице
let pageName = document.querySelector('.kusto__title').textContent;
let pagejob = document.querySelector('.kusto__subtitle').textContent;

// Берём текст из полей ввода 
let inname = document.getElementById('input-name');
let injob = document.getElementById('input-job');

// Устанавливаем атрибут value 
inname.setAttribute('value', pageName);
injob.setAttribute('value', pagejob);

// Записываем введенные значения на страницу
const saveButton = document.getElementById('savebutt');

 function saveInf() {
    document.querySelector('.kusto__title').textContent = inname.value;
    document.querySelector('.kusto__subtitle').textContent = injob.value;
    togglePopup();
 }

 saveButton.addEventListener('click', saveInf);

console.log(saveButton);
