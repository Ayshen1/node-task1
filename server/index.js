const express = require('express');
const app = express();
const PORT = 8080;

const fakeData =[
    {
        id:1,
        productName:"Iphone 13",
        brandName:"Apple",
        price:1800,
        stockCount:20,
        isDiscounted:true,
    },
    {
        id:2,
        productName:"Iphone 12",
        brandName:"Apple",
        price:1400,
        stockCount:16,
        isDiscounted:true,
    },
    {
        id:3,
        productName:"Iphone 11",
        brandName:"Apple",
        price:1100,
        stockCount:12,
        isDiscounted:false,
    }
]
// get all products
app.get('/products', (req, res) => {
    res.send(fakeData)
})
// get all products by id
app.get('/products/:id', (req, res) => {
    console.log('request');
    res.send(fakeData)
})


app.listen(PORT, () => {
    console.log(`First Node App on port ${PORT}`)
})