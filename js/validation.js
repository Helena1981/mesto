const enableValidationSettings = {
	formSelector: '.form',
	inputSelector: '.form__input',
	inputErrorClass: 'form__input_error',
	submitButtonSelector: '.form__button',
	inactiveButtonClass: 'form__button_disabled',
	errorClass: 'form__error_visible'
};


// Добавляем невалидное состояние полей
const showInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
	const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
	inputElement.classList.add(inputErrorClass);
	errorElement.textContent = inputElement.validationMessage;
	errorElement.classList.add(errorClass);
};

// Добавляем валидное состояние полей
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
	const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
	inputElement.classList.remove(inputErrorClass);
	errorElement.textContent = '';
	errorElement.classList.remove(errorClass);
};

// Валидация при помощи API
const checkValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
	if (inputElement.validity.valid == false) {
		showInputError(formElement, inputElement, inputErrorClass, errorClass);
	} else {
		hideInputError(formElement, inputElement, inputErrorClass, errorClass);
	}
};


const isInvalidInput = (inputs) => {
	return inputs.some((inputElement) => {
		return !inputElement.validity.valid;
	});
}


// Переключаем состояние кнопки
const toggleButtonState = (inputs, buttonSubmit, inactiveButtonClass) => {
	if (isInvalidInput(inputs)) {
		buttonSubmit.classList.add(inactiveButtonClass);
		buttonSubmit.disabled = true;
	} else {
		buttonSubmit.classList.remove(inactiveButtonClass);
		buttonSubmit.disabled = false;
	}
}

// Вешаем обработчики на все поля
const setEventListeners = (formElement, {
	inputSelector,
	submitButtonSelector,
	inactiveButtonClass,
	inputErrorClass,
	errorClass
}) => {

	const inputs = Array.from(formElement.querySelectorAll(inputSelector));
	const buttonSubmit = formElement.querySelector(submitButtonSelector);

	toggleButtonState(inputs, buttonSubmit, inactiveButtonClass);

	inputs.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			checkValidity(formElement, inputElement, inputErrorClass, errorClass);
			toggleButtonState(inputs, buttonSubmit, inactiveButtonClass);
		});
	});
};

// Главная функция
function enableValidation({
	formSelector,
	...settings
}, ) {
	const forms = Array.from(document.querySelectorAll(formSelector));
	forms.forEach((formElement) => {
		formElement.addEventListener('submit', (event) => {

			event.preventDefault();
		});
		setEventListeners(formElement, settings);
	});
}

enableValidation(enableValidationSettings);

//editForm.addEventListener('reset', hideInputError);