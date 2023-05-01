const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
const chef = require('./data/chef.json')

app.get('/', (req, res)=>{
    res.send('american-chef-server')
})
app.get('/chef', (req, res)=>{
    res.send(chef)
})


app.listen(port,()=>{
    console.log('american-chef is running on port', port);
})