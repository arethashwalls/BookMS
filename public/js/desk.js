const showDeleteWarning = document.getElementById('show-delete-warning'),
      deleteWarning = document.getElementById('delete-warning'),
      yesDelete = document.getElementById('yes-delete'),
      noDelete = document.getElementById('no-delete');

if(showDeleteWarning) showDeleteWarning.addEventListener('click', () => {
    showDeleteWarning.setAttribute('disabled', true);
    deleteWarning.classList.remove('hidden');
});

if(yesDelete) yesDelete.addEventListener('click', function() {
    const deleteId = this.dataset.deleteid;
    const deleteTarget = this.dataset.deletetarget
    axios.delete(`/admin/delete/${deleteTarget}`, {data: {deleteId}})
    .then(result => {
        if(result.status === 200) window.location.reload();
    })
    .catch(err => console.log(err));
});

if(noDelete) noDelete.addEventListener('click', () => {
    showDeleteWarning.removeAttribute('disabled');
    deleteWarning.classList.add('hidden');
})