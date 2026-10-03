const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const pageController = require('../controllers/pageController');

router.get('/', productController.getHomePage);
router.get('/about', pageController.about);
router.get('/contact', pageController.contact);

module.exports = router;
