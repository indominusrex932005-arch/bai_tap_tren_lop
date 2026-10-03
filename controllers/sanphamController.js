const Product = require('../models/sanphamModel');
const { banners } = require('../models/productModel'); // banner vẫn là dữ liệu tĩnh

exports.getHomePage = async (req, res) => {
    try {
        const newProducts = await Product.find({ type: 'new' }).lean();
        const topProducts = await Product.find({ type: 'top' }).lean();

        res.render('layout', {
            title: 'Trang chủ',
            page: 'home',          // views/pages/home.ejs
            active: 'home',        // tô sáng menu
            scripts: ['home'],     // views/partials/page-scripts/home.ejs
            banners,
            newProducts,
            topProducts
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading products');
    }
};
