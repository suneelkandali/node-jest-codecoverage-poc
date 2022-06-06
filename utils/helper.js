exports.sum = (a, b) => {
    return a + b;
}

exports.deleteUserByID = (usersArr, id) => {
    return usersArr.filter((user) => user.id !== id);
}

exports.findByUserID = (usersArr, id) => {
    return usersArr.find((user) => user.id === id);
}