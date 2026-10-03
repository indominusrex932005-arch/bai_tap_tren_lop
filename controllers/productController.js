const { banners, newProducts, topProducts } = require('../models/productModel');

exports.getHomePage = (req, res) => {
    res.render('layout', {
        title: 'Trang chủ',
        page: 'home',          // views/pages/home.ejs
        active: 'home',        // tô sáng menu
        scripts: ['home'],     // views/partials/page-scripts/home.ejs
        banners,
        newProducts,
        topProducts
    });
};
