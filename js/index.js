const openPopupButton = document.querySelector('.profile__pen');
const openCardButton = document.querySelector('.profile__button');

const popupEdit = document.querySelector('.popup');
const popupCard = document.querySelector('.popupcard');
const popupImage = document.querySelector('.popupimage');


const editForm = popupEdit.querySelector('.form');
const addCardForm = popupCard.querySelector('.form');

const closePopupButton = popupEdit.querySelector('.popup__close');
const closeCardButton = popupCard.querySelector('.popup__close');
const closeImageButton = popupImage.querySelector('.popupimage__close');

// Берём заголовок и подзаголовок на странице
let pageName = document.querySelector('.profile__title');
let pageJob = document.querySelector('.profile__subtitle');

// Берём текст из полей ввода 
const inname = editForm.querySelector('.form__input_name');
const injob = editForm.querySelector('.form__input_job');

const placeInput = addCardForm.querySelector('.form__card_name');
const urlInput = addCardForm.querySelector('.form__card_link');

const imageModalTitle = popupImage.querySelector('.popupimage__title');
const imageModalImg = popupImage.querySelector('.popupimage__image');

// Тоггл для всех модалок
function togglePopup(winPopup) {
    winPopup.classList.toggle('popup_opened');

}
// Открываем 1-ю модалку, значения полей пробрасываем со статичного HTML
openPopupButton.addEventListener('click', () => {
    inname.setAttribute('value', pageName.textContent);
    injob.setAttribute('value', pageJob.textContent);
    togglePopup(popupEdit);

});

openCardButton.addEventListener('click', () => togglePopup(popupCard));
closePopupButton.addEventListener('click', () => togglePopup(popupEdit));
closeImageButton.addEventListener('click', () => togglePopup(popupImage));
closeCardButton.addEventListener('click', () => togglePopup(popupCard));

// Записываем введенные значения на страницу
function saveUserData() {
    pageName.textContent = inname.value;
    pageJob.textContent = injob.value;
}


function addCardSubmitHandler(evt) {
    evt.preventDefault()
    renderCard({ name: placeInput.value, link: urlInput.value });
    togglePopup(popupCard);
}

editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveUserData();
    togglePopup(popupEdit);
});

addCardForm.addEventListener('submit', addCardSubmitHandler);


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
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__heart');
    const cardDeleteButton = cardElement.querySelector('.card__delete');

    cardLikeButton.addEventListener('click', handleLikeClick);

    cardDeleteButton.addEventListener('click', (evt) => {
        handleDeleteClick(evt);
    });

    cardImage.addEventListener('click', (evt) => {
        handleImageClick(evt)
    });

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    return cardElement;
}

function renderCard(data) {
    list.prepend(createCard(data));
}

initialCards.forEach((data) => {
    renderCard(data);
})

