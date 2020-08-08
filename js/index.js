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
const pageName = document.querySelector('.profile__title');
const pageJob = document.querySelector('.profile__subtitle');

// Берём текст из полей ввода 
const inputName = editForm.querySelector('.form__input_name');
const inputJob = editForm.querySelector('.form__input_job');

const placeInput = addCardForm.querySelector('.form__card_name');
const urlInput = addCardForm.querySelector('.form__card_link');

const imageModalTitle = popupImage.querySelector('.popupimage__title');
const imageModalImg = popupImage.querySelector('.popupimage__image');

//editForm.addEventListener('reset', hideInputError);


// Закрытие модалки эскейпом

const ESCAPE_KEY_CODE = 'Escape'; 
function closePopupEsc(event) {
    if (event.key === ESCAPE_KEY_CODE) {
        closePopup(document.querySelector('.popup_opened'));
    }
  }

// Закрытие модалки на overlay

function closePopupOverlay(event) {
  if (event.target.classList.contains('popup')) {
    closePopup(event.target);
  }
}

// Открытие модалки
function openPopup(winPopup) {
    winPopup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}

// Закрытие модалки
function closePopup(winPopup) {
    winPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}


// Открываем 1-ю модалку, значения полей пробрасываем со статичного HTML
openPopupButton.addEventListener('click', () => {
    
    inputName.setAttribute('value', pageName.textContent);
    inputJob.setAttribute('value', pageJob.textContent);
    openPopup(popupEdit);

});

openCardButton.addEventListener('click', () => openPopup(popupCard));
closePopupButton.addEventListener('click', () => closePopup(popupEdit));
closeImageButton.addEventListener('click', () => closePopup(popupImage));
closeCardButton.addEventListener('click', () => closePopup(popupCard));

// Слушатели для закрытия по Overlay
popupEdit.addEventListener('mousedown', closePopupOverlay);
popupCard.addEventListener('mousedown', closePopupOverlay);
popupImage.addEventListener('mousedown', closePopupOverlay);

// Записываем введенные значения на страницу
function saveUserData() {
    pageName.textContent = inputName.value;
    pageJob.textContent = inputJob.value;
}


function addCardSubmitHandler(evt) {
    evt.preventDefault();
    renderCard({ name: placeInput.value, link: urlInput.value });
    closePopup(popupCard);
}

editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveUserData();
    closePopup(popupEdit);
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
    openPopup(popupImage);
}

function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__heart');
    const cardDeleteButton = cardElement.querySelector('.card__delete');

    cardLikeButton.addEventListener('click', handleLikeClick);

    cardDeleteButton.addEventListener('click', handleDeleteClick);

    cardImage.addEventListener('click', handleImageClick);

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
});



