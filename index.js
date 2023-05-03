const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
const chef = require('./data/chef.json');
const topFood = require('./data/popularFood.json');
const blog = require('./data/blog.json');

app.get('/', (req, res)=>{
    res.send('american-chef-server is running')
})
app.get('/chef', (req, res)=>{
    res.send(chef)
})

app.get('/chef/:id',(req,res)=>{
    const id = req.params.id;
    const selectedChef = chef.find(n=>n.id == id);
    res.send(selectedChef);
})

app.get('/topFood',(req, res)=>{
    res.send(topFood);
})

app.get('/blog', (req, res)=>{
    res.send(blog)
})


app.listen(port,()=>{
    console.log('american-chef is running on port', port);
})