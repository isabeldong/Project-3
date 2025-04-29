const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const mongoose = require('mongoose');

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json()); // ✅ JSON body 파싱 반드시 필요

// 테스트용 API
app.get('/api/test', (req, res) => {
  res.json({ body: 'test ok3' });
});

// 거래 추가 API
app.post('/api/transaction', async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);

  const { name, description, datetime, price, category } = req.body; // ✅ category 추가
  try {
    const transaction = await Transaction.create({
      name,
      description,
      datetime,
      price,
      category, // ✅ 저장할 때도 category 포함
    });
    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
});

// 거래 목록 조회 API
app.get('/api/transactions', async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);

  try {
    const transactions = await Transaction.find({});
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// 서버 실행
app.listen(4040, () => {
  console.log('Server running on http://localhost:4040');
});
