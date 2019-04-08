const showDeleteWarning = document.getElementById('show-delete-warning'),
      deleteWarning = document.getElementById('delete-warning'),
      yesDelete = document.getElementById('yes-delete'),
      noDelete = document.getElementById('no-delete');

showDeleteWarning.addEventListener('click', () => {
    showDeleteWarning.setAttribute('disabled', true);
    deleteWarning.classList.remove('hidden');
})

yesDelete .addEventListener('click', function() {
    const deleteId = this.dataset.deleteid;
    axios.delete('/admin/delete/author', {data: {deleteId}})
    .then(result => {
        if(result.status === 200) window.location.reload();
    })
    .catch(err => console.log(err));
})