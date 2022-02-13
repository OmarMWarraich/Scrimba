
const openModal = document.getElementById('open-modal')
const closeModal = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')

openModal.addEventListener('click', function () {
    overlay.style.display = 'block';
})


closeModal.addEventListener('click', function () {
    overlay.style.display = 'none';
})

