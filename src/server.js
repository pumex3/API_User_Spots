const express = require ('express');
const routes = require ('./routes');
const mongoose = require ('mongoose');


const app = express();
mongoose.connect('mongodb+srv://USER:PASSWORD@aleixossoftware-9epej.mongodb.net/projectp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)


app.listen(3000, function teste(){
    console.log("API UP")
})