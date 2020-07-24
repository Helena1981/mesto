const openPopupButton = document.querySelector('.profile__pen');
const openCardButton = document.querySelector('.profile__button'); //project5

const popupEdit = document.querySelector('.popup');
const popupCard = document.querySelector('.popupcard'); //project5
const popupImage = document.querySelector('.popupimage'); //project5


const editForm = popupEdit.querySelector('.popup__form');
const addCardForm = popupCard.querySelector('.popup__form'); //project5

const closePopupButton = popupEdit.querySelector('.popup__close');
const closeCardButton = popupCard.querySelector('.popup__close'); //project5

// Берём заголовок и подзаголовок на странице
let pageName = document.querySelector('.profile__title').textContent;
let pagejob = document.querySelector('.profile__subtitle').textContent;

// Берём текст из полей ввода 
const inname = editForm.querySelector('.form__input_name');
const injob = editForm.querySelector('.form__input_job');

const placeInput = addCardForm.querySelector('.form__card_name'); //project5
const urlInput = addCardForm.querySelector('.form__card_link'); //project5

const imageModalTitle = popupImage.querySelector('.popup__title');
const imageModalImg = popupImage.querySelector('.popup__image');

function togglePopup() {
    popupEdit.classList.toggle('popup_opened');
    inname.setAttribute('value', pageName);
    injob.setAttribute('value', pagejob);
}

function toggleCard() {                             //project5
    popupCard.classList.toggle('popup_opened');
   
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

openCardButton.addEventListener('click', toggleCard); //project5
closeCardButton.addEventListener('click', toggleCard); //project5

const saveButton = document.querySelector('.form__button');

// Записываем введенные значения на страницу
function saveInf() {
    document.querySelector('.profile__title').textContent = inname.value;
    document.querySelector('.profile__subtitle').textContent = injob.value;
    togglePopup();    
}


function addCardSubmitHandler(evt) {
    evt.preventDefault()

    renderCard({name: placeInput.value, link: urlInput.value});

    toggleCard();
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




// Лиза
const cardTemplate = document.querySelector('#initItem').content.querySelector('.card__item');
const list = document.querySelector('.card__items');

function handleLikeClick(evt) {
    evt.target.classList.toggle('card__heart_active');
}

function handleDeleteClick(evt) {
    evt.target.closest('.card__item').remove();
}


function handleImageClick(evt) {
    imageModalTitle.textContent = evt.target.alt;
    imageModalImg.src = evt.target.src;

    console.log(imageModalTitle);
    console.log(imageModalImg);
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

