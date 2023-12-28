/** @format */

const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { init: initDB, Counter } = require('./db');

const logger = morgan('tiny');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

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

// Product

app.get('/product1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product1.html'));
});

app.get('/product2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product2.html'));
});

app.get('/product3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product3.html'));
});

app.get('/product4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product4.html'));
});

// 首页
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'product.html'));
});

// 获取计数
// app.get('/api/count', async (req, res) => {
//   const result = await Counter.count();
//   res.send({
//     code: 0,
//     data: result,
//   });
// });

// 小程序调用，获取微信 Open ID
// app.get('/api/wx_openid', async (req, res) => {
//   if (req.headers['x-wx-source']) {
//     res.send(req.headers['x-wx-openid']);
//   }
// });

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log('启动成功', port);
  });
}

bootstrap();
