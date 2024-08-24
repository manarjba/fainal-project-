// app.js
const express = require('express');
const app = express();
const port = 3000;

// استخدام JSON middleware
app.use(express.json());

// استيراد المسارات
const booksRouter = require('./routes/books');
const cartRouter = require('./routes/cart');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const categoriesRouter = require('./routes/categories');

// استخدام المسارات
app.use('/books', booksRouter);
app.use('/cart', cartRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/categories', categoriesRouter);

// تشغيل الخادم
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



// اختبار الاتصال بقاعدة البيانات
const db = require('./db');

db.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('خطأ في الاستعلام:', err);
  } else {
    console.log('النتيجة:', results[0].solution);
  }
});
