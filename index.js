const express = require("express");
const app = express();
const booksRouter = require("./routes/book.route");

app.use(express.json());

const PORT = 8080;

app.use("/api/books", booksRouter);
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});