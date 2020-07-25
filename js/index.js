const openPopupButton = document.querySelector('.profile__pen');
const openCardButton = document.querySelector('.profile__button'); 

const popupEdit = document.querySelector('.popup');
const popupCard = document.querySelector('.popupcard'); 
const popupImage = document.querySelector('.popupimage'); 


const editForm = popupEdit.querySelector('.popup__form');
const addCardForm = popupCard.querySelector('.popup__form'); 

const closePopupButton = popupEdit.querySelector('.popup__close');
const closeCardButton = popupCard.querySelector('.popup__close'); 
const closeImageButton = popupImage.querySelector('.popup__close'); 

// Берём заголовок и подзаголовок на странице
let pageName = document.querySelector('.profile__title').textContent;
let pagejob = document.querySelector('.profile__subtitle').textContent;

// Берём текст из полей ввода 
const inname = editForm.querySelector('.form__input_name');
const injob = editForm.querySelector('.form__input_job');

const placeInput = addCardForm.querySelector('.form__card_name'); 
const urlInput = addCardForm.querySelector('.form__card_link'); 

const imageModalTitle = popupImage.querySelector('.popupimage__title'); 
const imageModalImg = popupImage.querySelector('.popupimage__image'); 

function togglePopup(winPopup) {
    winPopup.classList.toggle('popup_opened');
    inname.setAttribute('value', pageName);
    injob.setAttribute('value', pagejob);
}

openPopupButton.addEventListener('click', () => {
    togglePopup(popupEdit)
});

openCardButton.addEventListener('click', () => {
    togglePopup(popupCard)
}); 

closePopupButton.addEventListener('click', () => {
    togglePopup(popupEdit)
});

closeImageButton.addEventListener('click', () => {
    togglePopup(popupImage)
});

closeCardButton.addEventListener('click', () => {
    togglePopup(popupCard)
});


const saveButton = document.querySelector('.form__button');

// Записываем введенные значения на страницу
function saveInf() {
    document.querySelector('.profile__title').textContent = inname.value;
    document.querySelector('.profile__subtitle').textContent = injob.value;
    togglePopup(popupEdit);    
}


function addCardSubmitHandler(evt) {
    evt.preventDefault()
    renderCard({name: placeInput.value, link: urlInput.value});
    togglePopup(popupCard);
} 

editForm.addEventListener('submit', (event) => {
    event.preventDefault()
    saveInf();
});

addCardForm.addEventListener('submit', addCardSubmitHandler);



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

// Создаём Template
const cardTemplate = document.querySelector('#initItem').content.querySelector('.card__item');
const list = document.querySelector('.card__items');

// Функция определяет, на какой элемент кликнули и тут же меняет стиль этого элемента
function handleLikeClick(evt) {
    evt.target.classList.toggle('card__heart_active');
}

// Удаляет ближайший родительский элемент с нужным классом
function handleDeleteClick(evt) {
    evt.target.closest('.card__item').remove();
}

function handleImageClick(evt) {
    imageModalTitle.textContent = evt.target.alt;
    imageModalImg.src = evt.target.src;
    imageModalImg.alt = evt.target.alt;
    togglePopup(popupImage);
}

function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTtile = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__heart');
    const cardDeleteButton = cardElement.querySelector('.card__delete');

    cardLikeButton.addEventListener('click', (evt) => {
        handleLikeClick(evt);
    });

    cardDeleteButton.addEventListener('click', (evt) => {
        handleDeleteClick(evt);
    });

    cardImage.addEventListener('click', (evt) => {
        handleImageClick(evt)
    });

    cardTtile.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    return cardElement;
}

function renderCard(data) {
    list.prepend(createCard(data));
}

initialCards.forEach((data) => { 
    renderCard(data)
})

