document.addEventListener('DOMContentLoaded', () => {
    console.log('js is processed');
    openModal();
    closeModal();
})

const openModal = () => {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    document.getElementById('more-information').addEventListener('click', () => {
        modal.classList.toggle('modal-hidden');
        modalContent.classList.toggle('modal-anim');
    });
}

const closeModal = () => {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    document.getElementById('modal-close').addEventListener('click', () => {
        modal.classList.toggle('modal-hidden');
        modalContent.classList.toggle('modal-anim');
    });
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.toggle('modal-hidden');
            modalContent.classList.toggle('modal-anim');
        }
    }
}