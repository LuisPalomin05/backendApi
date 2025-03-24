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
app.use('/api/ventas', require('./routes/ventas'));
app.use('/api/cotizacion', require('./routes/cotizacion'));
app.use('/api/notes', require('./routes/notes'));




module.exports = app;