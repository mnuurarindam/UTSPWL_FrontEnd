const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;
const secretKey = 'your-secret-key';

app.use(bodyParser.json());

// Database (sederhana, gunakan database yang sesuai)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Registrasi endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Simpan data pengguna ke database (biasanya ke database nyata)
  users.push({ id: users.length + 1, username, password });
  res.json({ message: 'Registrasi berhasil' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Temukan pengguna dalam database (biasanya dengan database nyata)
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    // Buat token JWT
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Login berhasil', token });
  } else {
    res.status(401).json({ message: 'Login gagal' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
