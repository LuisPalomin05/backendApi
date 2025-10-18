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

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/ventas', require('./routes/ventas'));
app.use('/api/cotizacion', require('./routes/cotizacion'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/proveedores', require('./routes/proveedores'));
app.use('/api/compras', require('./routes/compras'));
app.use('/api/pedidos', require('./routes/pedidos'));




module.exports = app;