const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');

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
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/proveedores', require('./routes/proveedores'));
app.use('/api/compras', require('./routes/compras'));
app.use('/api/sunat', require('./routes/sunat.routes.js'));





module.exports = app;