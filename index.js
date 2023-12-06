/** @format */

const path = require('path');
const express = require('express');
const cors = require('cors');
// const { init: initDB, Counter } = require('./db');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve 'poster1.html' at route '/about'
app.get('/poster1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'poster1.html'));
});

app.get('/poster2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'poster2.html'));
});

app.get('/poster3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'poster3.html'));
});

app.get('/poster4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'poster4.html'));
});

app.get('/poster5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'poster5.html'));
});

// 首页
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log('启动成功', port);
  });
}

bootstrap();
