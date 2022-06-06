const { sum, deleteUserByID, findByUserID } = require("../utils/helper");


/*beforeAll(() => {
    console.log("Run before all tests");
})

beforeEach(() => {
    console.log("Run before each test");
})

afterEach(() => {
    console.log("Run after each test");
})

afterAll(() => {
    console.log("Run after all tests");
}) */

describe("number operations", () => {
    test("1 plus 1 is equal to 2", () => {
        let a = 1;
        let b = 2;
        expect(a + b).toBe(3);
    });

    test("5 plus 5 not equal to 11", () => {
        let a = 5;
        let b = 5;
        expect(a + b).not.toBe(11);
    });
});

describe("string operations", () => {
    test("There should be no I in the team", () => {
        let str = "team";
        expect(str).not.toMatch(/I/);
    });

    test("There is 'stop' in Christopher", () => {
        let str = "Christopher";
        expect(str).toMatch(/stop/);
    });
});

const shoppingList = ["Milk", "Trash bags", "Paper towels", "Iphones"];

describe("array operations", () => {
    test("The shopping list does not have PS4", () => {
        expect(shoppingList).not.toContain("PS4");
    });

    test("The shopping list does have Milk", () => {
        expect(shoppingList).toContain("Milk");
    });
});

//Reference type equality

describe("Testing reference equality", () => {
    const user = {
        name: "Clement",
    };

    user["age"] = 45;

    test("Should return a user object with age as 45", () => {
        expect(user).toEqual({
            name: "Clement",
            age: 45,
        });
    });

    test("Should return user object with name and age keys", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        );
    });

    test("Array equality", () => {
        const users = ["Sarah", "July", "Clement"];
        users.push("Jacob");
        expect(users).toEqual(["Sarah", "July", "Clement", "Jacob"]);
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]));
    });

    const userObjectInArray = [
        {
            user: "Clement",
            age: 12,
        },
        {
            user: "Sarah",
            age: 14,
        },
        {
            user: "July",
            age: 25,
        },
    ];

    userObjectInArray.push({
        name: "Phil",
        age: 57
    });

    expect(userObjectInArray).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        ]

        )

    );
});

//Test functions

describe("Test functions", () => {
    test("check function sum", () => {
        expect(sum(1, 2)).toBe(3);
    })

    const users = [
        {
            id: 1,
            name: "user1",
            age: 45

        },
        {
            id: 2,
            name: "user2",
            age: 50
        },
        {
            id: 3,
            name: "user3",
            age: 35
        }


    ];

    test("check delete user by ID function", () => {
        expect(deleteUserByID(users, 3)).toEqual([
            {
                id: 1,
                name: "user1",
                age: 45

            },
            {
                id: 2,
                name: "user2",
                age: 50
            }]
        )
    });

    test("Find by user ID function", () => {
        expect(findByUserID(users, 1)).toEqual(
            {
                id: 1,
                name: "user1",
                age: 45
            }
        )
    })



});