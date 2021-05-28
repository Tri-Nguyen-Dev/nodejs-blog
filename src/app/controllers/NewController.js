

class NewController {
    index(req, res) {
        res.render('new')
    }

    show(req, res) {
        res.send('Detail')
    }
}

module.exports = new NewController