const express = require('express');
const path = require('path');

const routes = require('./routes/index');

const app = express();
const PORT = 3000;

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
