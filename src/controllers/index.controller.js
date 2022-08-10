
const {context} = require('../Data/ApplicationDbContext')

const getBooks = async (req,res) => {
    try {
        const response = await context.query('select * from bookss')
        res.json(response.rows)
    }
    catch (error)
    {
        res.json({
            message: 'error to savo the book',
            error : error
        })
    }
}

const setBooks = async (req, res) => {
    try {
        const {section, title, author} = req.body
        await context.query('insert into bookss(section,title,author) values($1,$2,$3)',[section, title, author]) 
        res.json({
            message: 'Book Create Succesfully',
            body: {
                book:{section, title, author}
            }
        })
        res.send(response)
    }
    catch (error)
    {
        res.json({
            message: 'error to savo the book',
            error : error
        })
    }
}

const getFavoriteBooks = async (req, res) =>{
    try
    {
        const response = await context.query(` SELECT favoritesbooks.reader , bookss.title , bookss.author  
            FROM favoritesbooks 
            INNER JOIN bookss ON bookss.id = favoritesbooks.bookid`)
        res.json(response.rows)
    }
    catch (error)
    {
        res.json({
            message: 'error to savo the book',
            error : error
        })
    }
}

const setFavoriteBooks = async (req, res) =>{

    try
    {
        const {bookid,reader} = req.body
        await context.query('insert into favoritesbooks(bookid,reader) values($1,$2)', [bookid,reader])
        res.json(response.rows)
    }
    catch (error)
    {
        res.json({
            message: 'error to savo the book',
            error : error
        })
    }
}

module.exports = {getBooks, setBooks, getFavoriteBooks, setFavoriteBooks}