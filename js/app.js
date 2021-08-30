document.addEventListener('DOMContentLoaded', () => {
    darkMode()
})

function darkMode() {
    const darkMode = document.querySelector('.header__darkMode--btn')
    const toogle = document.querySelector('.toogle')

    darkMode.addEventListener('click', () => {
       document.body.classList.toggle('darkMode');
       toogle.classList.toggle('active');
    })
  
}