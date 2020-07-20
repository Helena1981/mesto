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
// const cardTemplate = document.querySelector('#initItem').content;
// const cardOnline = document.querySelector('.card__items');
// let cardElement = cardTemplate.cloneNode(true);

// cardElement.querySelector('.card__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
// cardElement.querySelector('.card__title').textContent = 'Архыз';

// cardOnline.append(cardElement);
// ---------



// Работающий код на все карточки
const cardTemplate = document.querySelector('#initItem').content; //Берём template
const cardOnline = document.querySelector('.card__items'); //Берём элемент, внутрь которого будет вставлять код из template

function cardRender (lin, nam) { //Объявляем функциюс аргументами
    let cardElement = cardTemplate.cloneNode(true); // Создаём переменную и клонируем в неё наш template
    cardElement.querySelector('.card__image').src = initialCards[lin].link; //Нужному элементу назначаем ссылку на картинку из массива
    cardElement.querySelector('.card__title').textContent = initialCards[nam].name; //Нужному элементу назначаем текстовый контент из массива
    cardOnline.append(cardElement); //Выводим склонированный шаблон с подготовленным контентом
}

// cardRender (0, 0);
// cardRender (1, 1);
// cardRender (2, 2);


initialCards.forEach(function (item, i) { // Запускаем цикл вывода шаблона с новыми параметрами
    cardRender (i, i);
});





