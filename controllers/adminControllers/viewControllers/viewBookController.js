module.exports = {
    getViewBooks: (req, res) => {
        res.render('admin/viewers/viewBooks', {
            username: 'Arthur',
            num: 3
        })
    }
}