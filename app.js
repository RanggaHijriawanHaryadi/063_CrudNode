const express = require('express');
const app = express();
const todoRoutes = require('./routes/tudo.js');
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan rute todo
app.use('/todos', todoRoutes);

// Mengatur view engine
app.set('view engine', 'ejs');

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.render('index'); // Render halaman index
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di port: http://localhost:${port}`);
});