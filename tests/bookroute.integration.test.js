const express = require("express");
const request = require("supertest");
const { check, validationResul } = require("express-validator");
const booksRoute = require("../routes/book.route");
const router = require("../routes/book.route");

const app = express();

app.use(express.json());
app.use("/api/books", booksRoute);

jest.mock("../data/books.json", () => [
    {
        name: "Call of the wild",
        author: "Louis wilder",
        id: 1
    },
    {
        name: "Love like no other",
        author: "Charlie Bronsey",
        id: 2
    },
    {
        name: "Dream",
        author: "Jammie Phillips",
        id: 3
    }
]

);

/*describe("Integration tests for the API", () => {
    it("POST - /api/books  - failure on invalid post body", async () => {
        const { body, statusCode } = await request(app).post("/api/books").send({
            name: "",
            author: "John Travolta",
        });

        console.log(body);
        expect(statusCode).toBe(400);

        expect(body).toEqual({
            errors: [
                {
                    location: "body",
                    msg: "Book name is required",
                    param: "name",
                    value: "",
                },
            ],
        });
    });

    it("POST - /api/books - success", async () => {
        const { body, statusCode } = await request(app).post("/api/books").send({
            id: 1,
            name: "Face off",
            author: "John Travelota",
        });

        expect(statusCode).toBe(200);

        expect(body).toEqual({
            message: "Success",
        });
    });

    it("GET - /api/books - success - getAllBooks", async () => {
        const { body, statusCode } = await request(app).get("/api/books");
        expect(body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    author: expect.any(String),
                }),
            ])
        );

        expect(statusCode).toEqual(200);
    });

    it("PUT - /api/books/:bookid - failure when book is not found", async () => {
        const { body, statusCode } = await request(app)
            .put("/api/books/5000")
            .send({
                name: "Love me like you do",
                author: "John Travelota",
            });

        expect(statusCode).toBe(404);

        expect(body).toEqual({
            error: true,
            message: "Book not found",
        });
    });

    it("PUT - /api/books/:bookid - success when book is found", async () => {
        const { body, statusCode } = await request(app).put("/api/books/1").send({
            name: "Love me like you do",
            author: "John Travelota",
        });

        expect(statusCode).toBe(200);

        expect(body).toEqual({
            message: "Success in updating the book",
        });
    });
}); */

describe("Delete tests for the API", () => {
    it("DELETE - /api/books/:bookid - success when book is deleted", async () => {
        const { body, statusCode } = await request(app).delete("/api/books/1");

        expect(statusCode).toBe(200);

        expect(body).toEqual({
            message: "Success in deleting the book",
        });
    });
});
