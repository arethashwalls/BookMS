//Import all needed DOM variables:
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
      editBookAlias = document.getElementById('edit-book-alias'),
      newBookAlias = document.getElementById('new-book-alias');

/************************** Deleting Items: **************************/

//If on the proper page, listen for delete click and show warning:
if(showDeleteWarning) showDeleteWarning.addEventListener('click', () => {
    showDeleteWarning.setAttribute('disabled', true);
    deleteWarning.classList.remove('hidden');
});

//Listen for 'yes' click and delete target:
if(yesDelete) yesDelete.addEventListener('click', function() {
    const deleteId = this.dataset.deleteid;
    const deleteTarget = this.dataset.deletetarget
    axios.delete(`/admin/delete/${deleteTarget}`, {data: {deleteId}})
    .then(result => {
        if(result.status === 200) window.location.reload();
    })
    .catch(err => console.log(err));
});

//Listen for 'no' click and return to regular view:
if(noDelete) noDelete.addEventListener('click', () => {
    showDeleteWarning.removeAttribute('disabled');
    deleteWarning.classList.add('hidden');
});

/************************** Editing Fields: **************************/

//A reusable function for adding togglers to edit icons:
const addToggler = (toggleButton, showBlock, editBlock) => {
    toggleButton.addEventListener('click', () => {
        showBlock.classList.toggle('hidden');
        editBlock.classList.toggle('hidden');
    });
}

//A reusable function for adding submission handling to edit forms:
const addEditor = (editForm, editInput, type, field) => {
    editForm.addEventListener('submit', e => {
        e.preventDefault();
        const alias = editForm.dataset.alias;
        const updateValue = {};
        updateValue[field] = editInput.value;
        axios.put(`/admin/edit/${type}/${alias}`, {data: updateValue})
        .then(response => {
            if(response.status === 200) window.location.reload();
        })
        .catch(err => console.log(err))
    });
}

//Add toggler and editor for book titles:
if(toggleEditBookTitle) addToggler(toggleEditBookTitle, showBookTitle, editBookTitle);
if(editBookTitle) addEditor(editBookTitle, newBookTitle, 'book', 'title');

//Add toggler and editor for book aliases:
if(toggleEditBookAlias) addToggler(toggleEditBookAlias, showBookAlias, editBookAlias);
//Aliases require a slightly different editor:
if(editBookAlias) editBookAlias.addEventListener('submit', e => {
    e.preventDefault();
    const alias = editBookAlias.dataset.alias;
    const newAlias = newBookAlias.value;
    axios.put(`/admin/edit/book/${alias}`, {data: {alias: newAlias}})
    .then(response => {
        if(response.status === 200) window.location.replace(`/admin/view/book/${newAlias}`)
    })
    .catch(err => console.log(err));
});