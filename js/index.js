const openPopupButton = document.querySelector('.profile__pen');
const closePopupButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

// Берём заголовок и подзаголовок на странице
let pageName = document.querySelector('.profile__title').textContent;
let pagejob = document.querySelector('.profile__subtitle').textContent;

// Берём текст из полей ввода 
let inname = document.querySelectorAll('.form__input')[0];
let injob = document.querySelectorAll('.form__input')[1];

function togglePopup() {
    popup.classList.toggle('popup_opened');
    // Устанавливаем атрибут value для полей ввода
    inname.setAttribute('value', pageName);
    injob.setAttribute('value', pagejob);
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);


// Записываем введенные значения на страницу
const saveButton = document.querySelector('.form__button');

function saveInf() {
    document.querySelector('.profile__title').textContent = inname.value;
    document.querySelector('.profile__subtitle').textContent = injob.value;
    togglePopup();
}

saveButton.addEventListener('click', saveInf);