module.exports = {
    getDesk: (req, res) => {
        res.render('admin/desk', {
            username: 'Arthur'
        })
    }
}