var popup = document.getElementById('main-popup');
var popupBtn = document.getElementById('open-popup');

popupBtn.addEventListener('click' , function() {
    popup.classList.remove()
    popup.classList.add('main-popup', 'open')

})

var popupBtnClose = document.getElementById('btn-close-popup');


popupBtnClose.addEventListener('click' , function() {
    popup.classList.remove('open')
})


