const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 7000);
//middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/compras', require('./routes/compras'));
app.use('/api/ventas', require('./routes/ventas'));



module.exports = app;