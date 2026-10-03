const express = require('express');
const path = require('path');

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Kích hoạt thư mục public (assets, image)
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sử dụng routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Đã kết nối MongoDB:', mongoose.connection.name))
    .catch(err => console.error('❌ MongoDB error:', err.message));

  app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));