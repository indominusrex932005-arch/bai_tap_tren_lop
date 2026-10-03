// Model: dữ liệu (dùng mảng const thay cho database)
// image: tên file trong public/image/product/
// salePrice: có thì hiện giá khuyến mãi; tag: nhãn hiện trên ảnh

const banners = [
    { image: 'banner1.jpg' },
    { image: 'banner2.jpg' },
    { image: 'banner3.jpg' },
    { image: 'banner4.jpg' }
];

const newProducts = [
    { name: 'Bánh kem dâu', price: 350000, image: 'banhkem-dau.jpg', tag: 'new' },
    { name: 'Bánh su kem cà phê', price: 120000, salePrice: 99000, image: 'banh-su-kem-ca-phe-1.jpg', tag: 'sale' },
    { name: 'Cupcake', price: 45000, image: 'cupcake.jpg' },
    { name: 'Crepe chocolate', price: 60000, image: 'crepe-chocolate.jpg' }
];

const topProducts = [
    { name: 'Mango mousse cake', price: 280000, image: 'mango-mousse-cake.jpg', tag: 'hot' },
    { name: 'Matcha mousse', price: 260000, salePrice: 230000, image: 'MATCHA-MOUSSE.jpg', tag: 'sale' },
    { name: 'Macaron', price: 90000, image: 'Macaron9.jpg' },
    { name: 'Pizza Miami', price: 150000, image: 'pizza-miami.jpg' },
    { name: 'Fruit cake', price: 320000, image: 'Fruit-Cake.jpg', tag: 'hot' },
    { name: 'Bánh trái cây', price: 200000, image: 'banhtraicay.jpg' },
    { name: 'Crepe Pháp', price: 70000, image: 'crepe-phap.jpg' },
    { name: 'Su kem dâu', price: 55000, image: 'sukemdau.jpg' }
];

module.exports = { banners, newProducts, topProducts };
