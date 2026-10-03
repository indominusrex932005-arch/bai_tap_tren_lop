const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:      { type: String, required: true },
    price:     { type: Number, required: true },
    salePrice: { type: Number, default: null },   // giá khuyến mãi (nếu có)
    image:     { type: String, default: null },   // tên file trong public/image/product/
    tag:       { type: String, default: null },
    type:      { type: String, enum: ['new', 'top'], required: true }
});

module.exports = mongoose.model('Product', productSchema);
