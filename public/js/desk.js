/************************** Get all DOM nodes: **************************/

//Get all delete buttons:
const deleteWarningButtons = document.querySelectorAll('.show-delete-warning');

//Reusable function for getting all editor nodes for a given type and field:
const getEditorNodes = (type, field) => {
    return {
        toggle: document.getElementById(`toggle-edit-${type}-${field}`),
        show: document.getElementById(`show-${type}-${field}`),
        edit: document.getElementById(`edit-${type}-${field}`),
        new: document.getElementById(`new-${type}-${field}`)
    }
}

//Use getEditorNodes to get all editor nodes needed:
const editors = {
    book: {
        title: getEditorNodes('book', 'title'),
        alias: getEditorNodes('book', 'alias'),
        cover: getEditorNodes('book', 'cover')
    }
}

// const showDeleteWarning = document.getElementById('show-delete-warning'),
//       deleteWarning = document.getElementById('delete-warning'),
//       yesDelete = document.getElementById('yes-delete'),
//       noDelete = document.getElementById('no-delete'),
//       toggleEditBookTitle = document.getElementById('toggle-edit-book-title'),
//       showBookTitle = document.getElementById('show-book-title'),
//       editBookTitle = document.getElementById('edit-book-title'),
//       newBookTitle = document.getElementById('new-book-title'),
//       toggleEditBookAlias = document.getElementById('toggle-edit-book-alias'),
//       showBookAlias = document.getElementById('show-book-alias'),
//       editBookAlias = document.getElementById('edit-book-alias'),
//       newBookAlias = document.getElementById('new-book-alias');

/************************** Deleting Items: **************************/

//Add listener to all delete warning buttons:
deleteWarningButtons.forEach(button => button.addEventListener('click', function() {
    //Get the ID to delete:
    const deleteId = this.dataset.deleteid;
    //Get warning and yes and no buttons:
    const warning = document.getElementById(`warning-${deleteId}`);
    const yesButton = document.getElementById(`yes-${deleteId}`);
    const noButton = document.getElementById(`no-${deleteId}`);
    //Show warning:
    warning.classList.remove('hidden');
    //Disable show warning button:
    this.setAttribute('disabled', true);
    //Add listener to yes button:
    yesButton.addEventListener('click', function() {
        //Get delete target (book, author, et c):
        const deleteTarget = this.dataset.deletetarget;
        //Call DELETE route with target and ID:
        axios.delete(`/admin/delete/${deleteTarget}`, {data: {deleteId}})
        //On success, reload:
        .then(result => {
            if(result.status === 200) window.location.reload();
        })
        .catch(err => console.log(err));
    });
    //Add listener to no button to reset warning button:
    noButton.addEventListener('click', () => {
        warning.classList.add('hidden');
        this.removeAttribute('disabled')
    });
}));

/************************** Editing Fields: **************************/

// //A reusable function for adding togglers to edit icons:
// const addToggler = (toggleButton, showBlock, editBlock) => {
//     toggleButton.addEventListener('click', () => {
//         showBlock.classList.toggle('hidden');
//         editBlock.classList.toggle('hidden');
//     });
// }

// //A reusable function for adding submission handling to edit forms:
// const addEditor = (editForm, editInput, type, field) => {
//     editForm.addEventListener('submit', e => {
//         e.preventDefault();
//         const alias = editForm.dataset.alias;
//         const updateValue = {};
//         updateValue[field] = editInput.value;
//         axios.put(`/admin/edit/${type}/${alias}`, {data: updateValue})
//         .then(response => {
//             if(response.status === 200) window.location.reload();
//         })
//         .catch(err => console.log(err))
//     });
// }

// //Add toggler and editor for book titles:
// if(toggleEditBookTitle) addToggler(toggleEditBookTitle, showBookTitle, editBookTitle);
// if(editBookTitle) addEditor(editBookTitle, newBookTitle, 'book', 'title');

// //Add toggler and editor for book aliases:
// if(toggleEditBookAlias) addToggler(toggleEditBookAlias, showBookAlias, editBookAlias);
// //Aliases require a slightly different editor:
// if(editBookAlias) editBookAlias.addEventListener('submit', e => {
//     e.preventDefault();
//     const alias = editBookAlias.dataset.alias;
//     const newAlias = newBookAlias.value;
//     axios.put(`/admin/edit/book/${alias}`, {data: {alias: newAlias}})
//     .then(response => {
//         if(response.status === 200) {
//             console.log(response.data.message)
//             window.location.replace(`/admin/view/book/${response.data.message.alias}`)
//         }
//     })
//     .catch(err => console.log(err));
// });

// //Add toggler and editor for book cover image:
