const fs = require("fs");
const path = require("path");

function save(books) {
    console.log("books before save ..." + books)

    try {
        fs.writeFileSync(path.join(__dirname, "..", "data", "books.json"), JSON.stringify(books));

        return true;

    } catch (error) {
        return false;
    }

}

module.exports = {
    save
}