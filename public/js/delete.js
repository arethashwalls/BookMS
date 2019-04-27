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