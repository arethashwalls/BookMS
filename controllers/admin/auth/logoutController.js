module.exports = {
    postLogout: (req, res) => {
        res.clearCookie('access_token');
        res.redirect('/admin/login')
    }
}