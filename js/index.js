
 const openPopupButton = document.querySelector('.kusto__pen');
 const closePopupButton = document.querySelector('.popup__close');
 const popup = document.querySelector('.popup');
 
 function togglePopup() {
     popup.classList.toggle('popup_opened');
 }

 openPopupButton.addEventListener('click', togglePopup);
 closePopupButton.addEventListener('click', togglePopup);
 
 
//  console.log(closePopupButton);