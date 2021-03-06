const express = require('express');
const cors = require('cors')
const port = process.env.PORT ||4000;
const app = express();
app.use(cors());
app.get('/product-list/:page?', (req, res)=>{
    const page = req.params.page;
    const pageSize = req.params.pageSize || 8;
    let startProductId = page*pageSize+1
    let products = [];
    for(let i=startProductId; i<startProductId+pageSize; i++){
        let product ={};
        product.name = `Product No ${i}`;
        product.id = `${i}`;
        product.price = i*2+100; //
        products.push(product);
    }
    res.status(200).send(products);
});
app.listen(port, ()=>{
    console.log, (`app is running at ${port}`);
});