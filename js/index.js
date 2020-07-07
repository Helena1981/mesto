const openPopupButton = document.querySelector('.profile__pen');
const closePopupButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

// Берём заголовок и подзаголовок на странице
let pageName = document.querySelector('.profile__title').textContent;
let pagejob = document.querySelector('.profile__subtitle').textContent;

// Берём текст из полей ввода 
let inname = document.querySelector('.form__input_name');
let injob = document.querySelector('.form__input_job');

function togglePopup() {
    popup.classList.toggle('popup_opened');
    // Устанавливаем атрибут value для полей ввода
    inname.setAttribute('value', pageName);
    injob.setAttribute('value', pagejob);
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);


const saveButton = document.querySelector('.form__button');
// Записываем введенные значения на страницу
function saveInf() {
    document.querySelector('.profile__title').textContent = inname.value;
    document.querySelector('.profile__subtitle').textContent = injob.value;
    togglePopup();    
}
document.querySelector('.popup__form').addEventListener('submit', (event) => {
    event.preventDefault()
    saveInf();
});
