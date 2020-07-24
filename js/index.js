const openPopupButton = document.querySelector('.profile__pen');
const openPopupCard = document.querySelector('.profile__button'); //project5
const closePopupButton = document.querySelector('.popup__close');
const closeCard = document.querySelector('.close_cardpopup'); //project5
const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popupcard'); //project5

const cardTemplate = document.querySelector('#initItem').content; //Берём template
const cardOnline = document.querySelector('.card__items'); //Берём элемент, внутрь которого будет вставлять код из template

// Берём заголовок и подзаголовок на странице
let pageName = document.querySelector('.profile__title').textContent;
let pagejob = document.querySelector('.profile__subtitle').textContent;

// Берём текст из полей ввода 
let inname = document.querySelector('.form__input_name');
let injob = document.querySelector('.form__input_job');

let addName = document.querySelector('.form__card_name'); //project5
let addLink = document.querySelector('.form__card_link'); //project5


function togglePopup() {
    popup.classList.toggle('popup_opened');
    // Устанавливаем атрибут value для полей ввода
    inname.setAttribute('value', pageName);
    injob.setAttribute('value', pagejob);
}

function toggleCard() {                             //project5
    popupCard.classList.toggle('popup_opened');
   
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

openPopupCard.addEventListener('click', toggleCard); //project5
closeCard.addEventListener('click', toggleCard); //project5

const saveButton = document.querySelector('.form__button');

// Записываем введенные значения на страницу
function saveInf() {
    document.querySelector('.profile__title').textContent = inname.value;
    document.querySelector('.profile__subtitle').textContent = injob.value;
    togglePopup();    
}


function handleLike(evt) {
    evt.target.classList.toggle('card__heart_active');
}

// Добавление карточки на страницу пользователем
function addCard() {     
    const cardElement = cardTemplate.cloneNode(true);                
    const cardLikeButton = cardElement.querySelector('.card__heart');
    cardLikeButton.addEventListener('click', (evt) => evt.target.classList.toggle('card__heart_active'));
    cardElement.querySelector('.card__image').src = addLink.value;
    cardElement.querySelector('.card__image').alt = addName.value;
    cardElement.querySelector('.card__title').textContent = addName.value; 
    cardOnline.prepend(cardElement); 
    toggleCard();    
}


document.querySelector('.popup__form').addEventListener('submit', (event) => {
    event.preventDefault()
    saveInf();
});

document.querySelector('.popup_card').addEventListener('submit', (event) => {
    event.preventDefault()
    addCard();
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




//Выводим карточки из массива

function cardRender (lin, nam) { //Объявляем функцию с аргументами
    const cardElement = cardTemplate.cloneNode(true); // Создаём переменную и клонируем в неё наш template
    const cardLikeButton = cardElement.querySelector('.card__heart');
    cardLikeButton.addEventListener('click', (evt) => evt.target.classList.toggle('card__heart_active'));
    cardElement.querySelector('.card__image').src = initialCards[lin].link; //Нужному элементу назначаем ссылку на картинку из массива
    cardElement.querySelector('.card__image').alt = initialCards[nam].name; //Картинке alt такой же, как и имя
    cardElement.querySelector('.card__title').textContent = initialCards[nam].name; //Нужному элементу назначаем текстовый контент из массива
    cardOnline.append(cardElement); //Выводим склонированный шаблон с подготовленным контентом
    
}

// Запускаем цикл вывода шаблона с новыми параметрами
initialCards.forEach(function (item, i) { 
    cardRender (i, i);
});

