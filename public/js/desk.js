const showDeleteWarning = document.getElementById('show-delete-warning'),
      deleteWarning = document.getElementById('delete-warning'),
      yesDelete = document.getElementById('yes-delete'),
      noDelete = document.getElementById('no-delete'),
      toggleEditBookTitle = document.getElementById('toggle-edit-book-title'),
      showBookTitle = document.getElementById('show-book-title'),
      editBookTitle = document.getElementById('edit-book-title'),
      newBookTitle = document.getElementById('new-book-title'),
      toggleEditBookAlias = document.getElementById('toggle-edit-book-alias'),
      showBookAlias = document.getElementById('show-book-alias'),
      editBookAlias = document.getElementById('edit-book-alias');


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
});

if(toggleEditBookTitle) toggleEditBookTitle.addEventListener('click', () => {
    showBookTitle.classList.toggle('hidden');
    editBookTitle.classList.toggle('hidden');
});

if(editBookTitle) editBookTitle.addEventListener('submit', e => {
    e.preventDefault();
    const alias = editBookTitle.dataset.alias;
    const title = newBookTitle.value;
    axios.put(`/admin/edit/book/${alias}`, {data: {title}})
    .then(response => {
        if(response.status === 200) window.location.reload();
    })
    .catch(err => console.log(err));
});

if(toggleEditBookAlias) toggleEditBookAlias.addEventListener('click', () => {
    showBookAlias.classList.toggle('hidden');
    editBookAlias.classList.toggle('hidden');
});

if(editBookAlias) editBookAlias.addEventListener('submit', e => {
    e.preventDefault();
    const alias = editBookAlias.dataset.alias;
    axios.put(`/admin/edit/book/${alias}`, {data: {alias}})
    .then(response => {
        if(response.status === 200) window.location.reload();
    })
    .catch(err => console.log(err));
});