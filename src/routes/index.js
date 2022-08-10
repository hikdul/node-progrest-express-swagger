const {getBooks, setBooks, getFavoriteBooks, setFavoriteBooks} = require('../controllers/index.controller')
const {Router} = require('express')
const router = Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     favoriteBooks:
 *       type: object
 *       required:
 *         - reader
 *         - bookid
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         reader:
 *           type: string
 *           description: the user as reader
 *         bookid:
 *           type: integer
 *           description: the favorite book
 *       example:
 *         id: 1
 *         reader: Hector Contreras
 *         bookid: 2
 *         author: Emilio Salgari
 */


/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all reader whit the data of your favorite book
 *     tags: [favoriteBooks]
 *     responses:
 *       200:
 *         description: The list of the favorite books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/favoriteBooks'
 */

router.get('/', getFavoriteBooks)

/**
 * @swagger
 * /books:
 *   post:
 *     summary: create a new favorite book for a reader
 *     tags: [favoriteBooks]
 *     responses:
 *       200:
 *         description: The data of the new element
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               item:
 *                 $ref: '#/components/schemas/favoriteBooks'
 */
router.post('/', setFavoriteBooks)

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - section
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *         section:
 *           type: numbur
 *           description: the book location 
 *       example:
 *         id: 1
 *         title: The New Turing Omnibus
 *         section: 3 
 *         author: Alexander K. Dewdney
 */

/**
* @swagger
* tags:
*   name: Books
*   description: The books managing API
*/

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

router.get('/books', getBooks)
/**
 * @swagger
 * /books:
 *   post:
 *     summary: add a new book 
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: the book is create
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.post('/books', setBooks)

module.exports= router