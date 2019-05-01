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
            //Call PUT route with object:
            //For all but alias edits:
            if (field !== 'alias') {
                //Create an object with the update field and value:
                const updateValue = {};
                updateValue[field] = this.new.value;
                //Call PUT route with object:
                if(type === 'chapter' || type === 'bookPage') {
                    const num = this.toggle.dataset.num;
                    //For book sub-pages, change type to 'page' for proper routing:
                    if(type === 'bookPage') type = 'page';
                    axios.put(`/admin/books/${alias}/${type}s/${num}`, { data: updateValue })
                    .then(response => {
                        if (response.status === 200) window.location.reload();
                    })
                    .catch(err => console.log(err));
                } else {
                    axios.put(`/admin/${type}s/${alias}`, { data: updateValue })
                    //Reload on success:
                    .then(response => {
                        if (response.status === 200) window.location.reload();
                    })
                    .catch(err => console.log(err));
                }
            //For alias edits:
            } else {
                //Get new alias:
                const newAlias = this.new.value;
                //Call PUT route with new alias:
                axios.put(`/admin/edit/${type}/${alias}`, { data: { alias: newAlias } })
                    //On sucess, reload with new alias as URL:
                    .then(response => {
                        if (response.status === 200) window.location.replace(`/admin/${type}s/${response.data.message.alias}`)
                    })
                    .catch(err => console.log(err));
            }
        });
    }
}

//List out all possible fields for each type:
const allFields = {
    book: ['title', 'alias', 'cover', 'synopsis'],
    author: ['name', 'alias', 'bio'],
    page: ['p_title', 'alias', 'p_content'],
    chapter: ['ch_title'],
    bookPage: ['p_title', 'p_content']
}
//Get current type from viewbox div:
const type = document.getElementById('viewbox').dataset.type;
//If viewbox had a type, loop through all fields for that type and add an editor:
if (type) allFields[type].forEach(field => new Editor(type, field));