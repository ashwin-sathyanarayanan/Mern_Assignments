const express = require("express");
const app = express();
const faker = require('faker');
const port = 8000;

// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFake;
};
    
// we can create a function to return a random / fake "Product"
const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFake;
};

app.get("/api/user", (req, res) => {
    const newUser = createUser();
    res.json({newUser: newUser})
})

app.get("/api/company", (req, res) => {
    const newCompany = createCompany();
    res.json({newCompany: newCompany})
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({
        newUserCompany: {newUser: newUser, newCompany: newCompany}
    })
})

app.listen(port, () => console.log('express is running'));



// const newFakeProduct = createProduct();
// console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
