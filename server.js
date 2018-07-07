const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res)=> {
    const customers = [
        { 
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
        },
        {
            id: 2,
            firstName: 'Rocky',
            lastName: 'Stakes',
        },
        {
            id: 3,
            firstName: 'Pineapple',
            lastName: 'Rocker',
        },
        {
            id: 4,
            firstName: 'JS',
            lastName: 'Rockstar',
        },
    ]
    res.send(customers);
});

app.listen(port, () => console.log(`Sever Started on ${port}`));
