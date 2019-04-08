const showDeleteWarning = document.getElementById('show-delete-warning'),
      deleteWarning = document.getElementById('delete-warning');

showDeleteWarning.addEventListener('click', () => {
    showDeleteWarning.setAttribute('disabled', true);
    deleteWarning.classList.remove('hidden');
})