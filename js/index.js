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

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// ---------
// Работающий код на одну карточку 
const cardTemplate = document.querySelector('#initItem').content;
const cardOnline = document.querySelector('.card__items');


function cardRender(lin, nam) {
    let cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__image').src = initialCards[lin].link;
    cardElement.querySelector('.card__title').textContent = initialCards[nam].name;
    cardElement.querySelector('.card__image').alt = initialCards[nam].name;
    cardOnline.append(cardElement);
}

function addCard() {
    let cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__image').src = cardLink.value;
    cardElement.querySelector('.card__title').textContent = cardName.value;
    cardElement.querySelector('.card__image').alt = cardName.value;
    cardOnline.prepend(cardElement);
 
}
 initialCards.forEach(function (item, i) { // Запускаем цикл вывода шаблона с новыми параметрами
     cardRender (i, i);
    
});  



const openCardButton = document.querySelector('.profile__button');
const closeCardButton = document.querySelector('.popup__close_card');
const popupCard = document.querySelector('.popup_card');

let cardName = document.querySelector('.form__card_name');
let cardLink = document.querySelector('.form__card_link');

function togglepopupCard() {
    popupCard.classList.toggle('popup_opened');
    
}

openCardButton.addEventListener('click', togglepopupCard);
closeCardButton.addEventListener('click', togglepopupCard);

popupCard.querySelector('.popup__form').addEventListener('submit', (event) => {
    event.preventDefault()
    addCard();
    togglepopupCard();
});

