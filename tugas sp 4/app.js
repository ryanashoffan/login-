const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Route untuk menampilkan halaman login
app.get('/auth/login', (req, res) => {
    res.render('login');
});

// Route untuk menangani proses login
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    // Contoh validasi sederhana (hanya cocokkan dengan username dan password yang telah ditentukan)
    if (username === 'user' && password === 'password') {
        res.redirect('/user/profile');
    } else {
        res.send('Nama pengguna atau kata sandi salah!');
    }
});

app.get('/user/profile', (req, res) => {
    const profile = {
        name: 'Muraynomercy',
        nim: '2211523032',
        jurusan: 'Sistem Informasi',
        email: 'mryanashoffan05@gmail.com',
        photo: '/image/WhatsApp Image 2024-08-01 at 14.53.57_2e40038c.jpg'
    };
    res.render('index', { profile });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
