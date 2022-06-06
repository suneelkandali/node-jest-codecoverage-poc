const express = require("express");
const { check, validationResult } = require("express-validator");
const { save } = require("../services/book.service");

const router = express.Router();

const books = require("../data/books.json");

router.get("/", (req, res) => {
    res.send(books);
});

router.post(
    "/",
    [
        check("name", "Book name is required").not().isEmpty(),
        check("author", "Author name is required").not().isEmpty(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        console.log("in book route post1");
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const { id, name, author } = req.body;
        books.push({
            name: name,
            author: author,
            id: id ? id : Math.random(),
        });
        const isSaved = save(books);
        if (!isSaved) {
            return res.send(500).json({
                error: true,
                message: "could not save book",
            });
        }

        return res.status(200).json({
            message: "Success",
        });
    }
);

router.put("/:bookid", async (req, res) => {
    const { bookid } = req.params;
    const { name, author } = req.body;
    console.log("name ...." + name);
    console.log("author" + author);
    console.log("bookid is ..." + bookid);
    console.log(books);
    const foundBook = await books.find((book) => book.id == bookid);
    console.log("foundBook...." + foundBook);
    if (!foundBook) {
        return res.status(404).send({
            error: true,
            message: "Book not found",
        });
    }

    if (foundBook) {
        console.log("in found book");
        const updatedBooks = await books.map((book) => {
            if (book.id == bookid) {
                let updatedBook = {
                    ...book,
                    name: name,
                    author: author,
                };
                return updatedBook;
            } else {
                return book;
            }
        });
        console.log("updatedbooks..." + updatedBooks);
        const isSaved = await save(updatedBooks);
        if (isSaved) {
            return res.status(200).json({
                message: "Success in updating the book",
            });
        } else {
            return res.status(500).json({
                error: true,
                message: "Failure in updating the book",
            });
        }
    } else {
        return res.status(200).json({
            message: "Book was not found to be updated",
        });
    }
});

router.delete("/:bookid", async (req, res) => {
    const { bookid } = req.params;
    const foundBook = await books.find((book) => book.id == bookid);
    if (!foundBook) {
        return res.status(404).send({
            error: true,
            message: "Book not found to be deleted",
        });
    }

    if (foundBook) {
        console.log("in found book");
        const updatedBooks = await books.filter((book) => book.id != bookid);

        console.log("updatedbooks..." + updatedBooks);
        const isDeleted = await save(updatedBooks);
        if (isDeleted) {
            return res.status(200).json({
                message: "Success in deleting the book",
            });
        } else {
            return res.status(500).json({
                error: true,
                message: "Failure in deleting the book",
            });
        }
    } else {
        return res.status(200).json({
            message: "Book was not found to be deleted",
        });
    }
});

module.exports = router;
