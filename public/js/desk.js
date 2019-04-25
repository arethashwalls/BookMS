/************************** Deleting Items: **************************/

//Get all delete buttons:
const deleteWarningButtons = document.querySelectorAll('.show-delete-warning');

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

//Define an Editor class for adding editors for each type (book, author, et c) and field (title, name, et c):
class Editor {
    constructor(type, field) {
        //Get all DOM nodes:
        this.toggle = document.getElementById(`toggle-edit-${type}-${field}`);
        this.show = document.getElementById(`show-${type}-${field}`);
        this.edit = document.getElementById(`edit-${type}-${field}`);
        this.new = document.getElementById(`new-${type}-${field}`);
        //Add toggler listener to toggle button, will switch between edit form and display:
        this.toggle.addEventListener('click', () => {
            this.show.classList.toggle('hidden');
            this.edit.classList.toggle('hidden');
        });
        //Add submit lister to edit form:
        this.edit.addEventListener('submit', e => {
            //Prevent reload:
            e.preventDefault();
            //Get item's alias:
            const alias = this.edit.dataset.alias;
            //For all but alias edits:
            if(field !== 'alias') {
                //Create an object with the update field and value:
                const updateValue = {};
                updateValue[field] = this.new.value;
                //Call PUT route with object:
                axios.put(`/admin/edit/${type}/${alias}`, {data: updateValue})
                //Reload on success:
                .then(response => {
                    if(response.status === 200) window.location.reload();
                })
                .catch(err => console.log(err));
            //For alias edits:
            } else {
                //Get new alias:
                const newAlias = this.new.value;
                //Call PUT route with new alias:
                axios.put(`/admin/edit/book/${alias}`, {data: {alias: newAlias}})
                //On sucess, reload with new alias as URL:
                .then(response => {
                    console.log(response.data.message.alias)
                    if(response.status === 200) window.location.replace(`/admin/view/book/${response.data.message.alias}`)
                })
                .catch(err => console.log(err));
            }
        });
    }
}

const bookTitleEditor = new Editor('book', 'title');
const bookAliasEditor = new Editor('book', 'alias');
